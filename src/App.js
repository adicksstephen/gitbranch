import React from 'react';
import './App.css';
const { Gitgraph } = require("@gitgraph/react");

function MyComponent() {
  return (
      <Gitgraph>
        {(gitgraph) => {

          // Simulate git commands with Gitgraph API.
          const master = gitgraph.branch({
            name: "master",
            style: {
              color: "#969399",
              label: {
                strokeColor: "#969399",
                color: "#000000",
              },
            },
          });

          const develop = gitgraph.branch({
            name: "develop",
            style: {
              color: "#3085c7",
              label: {
                strokeColor: "#3085c7",
                color: "#000000",
              },
            },
          });

          const azure_dev = gitgraph.branch({
            parentBranch: "master",
            name: "env: azure-dev",
            style: {
              color: "#149927",
              label: {
                strokeColor: "#149927",
                color: "#000000",
              },
            },
          });

          const azure_qa = gitgraph.branch({
            parentBranch: master,
            name: "env: azure-qa",
            style: {
              color: "#149927",
              label: {
                strokeColor: "#149927",
                color: "#000000",
              },
            },
          });

          const azure_uat = gitgraph.branch({
            parentBranch: master,
            name: "env: azure-uat",
            style: {
              color: "#149927",
              label: {
                strokeColor: "#149927",
                color: "#000000",
              },
            },
          });
          const azure_prod = gitgraph.branch({
            parentBranch: master,
            name: "env: azure-prod",
            style: {
              color: "#149927",
              label: {
                strokeColor: "#149927",
                color: "#000000",
              },
            },
          });

          const adsFeature = gitgraph.branch({
            name: "feature/ads-s1-feature",
            style: {
              color: "#dcbb0d",
              label: {
                strokeColor: "#dcbb0d",
                color: "#000000",
              },
            },
          });

          const emFeature = gitgraph.branch({
            name: "feature/em-s1-feature",
            style: {
              color: "#d5a509",
              label: {
                strokeColor: "#dcbb0d",
                color: "#000000",
              },
            },
          });

          const releaseOne = gitgraph.branch({
            name: "release/release-one",
            style: {
              color: "#887fce",
              label: {
                strokeColor: "#887fce",
                color: "#000000",
              },
            },
          });

          const authr = "Janey <jc@ola.org>";
          const authr_ads = "Alexis <ads@ola.org>";
          const authr_em = "Erin <em@ola.org>";

          master.commit({
            subject: "[master] Initial commit",
            author: authr,
            style: {
              dot: { color: "#969399"},
              message: { color: "#969399"}
            }
          });
          develop.commit({
            subject: "[develop] Initial commit",
            author: authr,
            style: {
              dot: { color: "#3085c7"},
              message: { color: "#3085c7"}
            }
          });
          azure_dev.commit({
            subject: "[azure-dev] Initial commit",
            author: authr,
            style: {
              dot: { color: "#149927"},
              message: { color: "#149927"}
            }
          });

          azure_qa.commit({
            subject: "[azure-qa] Initial commit",
            author: authr,
                style: {
              dot: { color: "#149927"},
              message: { color: "#149927"}
            }
          });

          azure_uat.commit({
            subject: "[azure-uat] Initial commit",
            author: authr,
                style: {
              dot: { color: "#149927"},
              message: { color: "#149927"}
            }
          });

          azure_prod.commit({
            subject: "[azure-prod] Initial commit",
            author: authr,
                style: {
              dot: { color: "#149927"},
              message: { color: "#149927"}
            }
          });

          releaseOne.commit({
            subject: "[release/release-one] Initial commit",
            author: authr,
                style: {
              dot: { color: "#887fce"},
              message: { color: "#887fce"}
            }
          });

          adsFeature.commit({
            subject: "[feature/ads-s1-feature] Initial development",
            author: authr_ads,
            style: {
              dot: { color: "#dcbb0d"},
              message: { color: "#dcbb0d"}
            }
          });

          adsFeature.commit({
            subject: "[feature/ads-s1-feature] Fixed bug",
            author: authr_ads,
            style: {
              dot: { color: "#dcbb0d"},
              message: { color: "#dcbb0d"}
            }
          });

          azure_dev.merge({
            branch: adsFeature,
            fastForward: true,
            commitOptions: {
              subject: "[azure-dev] set to emulate [feature/ads-s1-feature]",
              author: authr,
              style: {
                dot: { color: "#dcbb0d"},
                message: { color: "#149927"}
              }
            },
          });

          emFeature.commit({
            subject: "[feature/em-s1-feature] Initial development",
            author: authr_em,
            style: {
              dot: { color: "#d5a509"},
              message: { color: "#d5a509"}
            }
          });

          azure_dev.merge({
            branch: emFeature,
            fastForward: true,
            commitOptions: {
              subject: "[azure-dev] set to emulate [feature/em-s1-feature]",
              author: authr_em,
              style: {
                dot: { color: "#d5a509"},
                message: { color: "#149927"}
              }
            },
          });

          adsFeature.commit({
            subject: "[feature/ads-s1-feature] Request QA (optional)",
            author: authr_ads,
            style: {
              dot: { color: "#dcbb0d"},
              message: { color: "#dcbb0d"}
            }
          });

          azure_qa.merge({
            branch: adsFeature,
            fastForward: true,
            commitOptions: {
              subject: "[azure-qa] set to emulate [feature/ads-s1-feature]",
              author: authr_ads,
              style: {
                dot: { color: "#dcbb0d"},
                message: { color: "#149927"}
              }
            },
          });

          adsFeature.commit({
            subject: "[feature/ads-s1-feature] Fix QA-identified bug",
            author: authr_ads,
            style: {
              dot: { color: "#dcbb0d"},
              message: { color: "#dcbb0d"}
            }
          });

          azure_qa.merge({
            branch: adsFeature,
            fastForward: true,
            commitOptions: {
              subject: "[azure-qa] set to emulate [feature/ads-s1-feature]",
              author: authr_ads,
              style: {
                dot: { color: "#dcbb0d"},
                message: { color: "#149927"}
              }
            },
          });

          releaseOne.merge({
            branch: adsFeature,
            fastForward: true,
            commitOptions: {
              subject: "[release/release-one] merge [feature/ads-s1-feature]",
              author: authr_ads,
              style: {
                dot: { color: "#dcbb0d"},
                message: { color: "#887fce"}
              }
            },
          });

          emFeature.commit({
            subject: "[feature/em-s1-feature] Request QA (optional)",
            author: authr_em,
            style: {
              dot: { color: "#d5a509"},
              message: { color: "#d5a509"}
            }
          });

          azure_qa.merge({
            branch: emFeature,
            fastForward: true,
            commitOptions: {
              subject: "[azure-qa] set to emulate [feature/em-s1-feature]",
              author: authr_em,
              style: {
                dot: { color: "#d5a509"},
                message: { color: "#149927"}
              }
            },
          });

          emFeature.commit({
            subject: "[feature/em-s1-feature] Fix QA-identified bug",
            author: authr_em,
            style: {
              dot: { color: "#d5a509"},
              message: { color: "#d5a509"}
            }
          });

          azure_qa.merge({
            branch: emFeature,
            fastForward: true,
            commitOptions: {
              subject: "[azure-qa] set to emulate [feature/em-s1-feature]",
              author: authr_em,
              style: {
                dot: { color: "#d5a509"},
                message: { color: "#149927"}
              }
            },
          });

          releaseOne.merge({
            branch: emFeature,
            fastForward: true,
            commitOptions: {
              subject: "[release/release-one] merge [feature/em-s1-feature]",
              author: authr_em,
              style: {
                dot: { color: "#d5a509"},
                message: { color: "#887fce"}
              }
            },
          });


          azure_dev.merge({
            branch: releaseOne,
            fastForward: true,
            commitOptions: {
              subject: "[azure-dev] set to emulate [release/release-one] | Developer reviews",
              author: authr_ads,
              style: {
                dot: { color: "#887fce"},
                message: { color: "#149927"}
              }
            },
          });

          releaseOne.commit({
            subject: "[release/release-one] Fix developer-identified bug",
            author: authr_ads,
            style: {
              dot: { color: "#887fce"},
              message: { color: "#887fce"}
            }
          });

          azure_qa.merge({
            branch: releaseOne,
            fastForward: true,
            commitOptions: {
              subject: "[azure-qa] set to emulate [release/release-one] | Request testing",
              author: authr_em,
              style: {
                dot: { color: "#887fce"},
                message: { color: "#149927"}
              }
            },
          });

          releaseOne.commit({
            subject: "[release/release-one] Fix QA-identified bug",
            author: authr_em,
            style: {
              dot: { color: "#887fce"},
              message: { color: "#887fce"}
            }
          });

          azure_qa.merge({
            branch: releaseOne,
            fastForward: true,
            commitOptions: {
              subject: "[azure-qa] set to emulate [release/release-one] | Request testing",
              author: authr_ads,
              style: {
                dot: { color: "#887fce"},
                message: { color: "#149927"}
              }
            },
          });

          azure_uat.merge({
            branch: releaseOne,
            fastForward: true,
            commitOptions: {
              subject: "[azure-uat] set to emulate [release/release-one] | Request user acceptance testing",
              author: authr_ads,
              style: {
                dot: { color: "#887fce"},
                message: { color: "#149927"}
              }
            },
          });

          releaseOne.commit({
            subject: "[release/release-one] Approved for deployment",
            author: authr,
            style: {
              dot: { color: "#887fce"},
              message: { color: "#887fce"}
            }
          }).tag("deployment candidate");

          develop.merge({
            branch: releaseOne,
            fastForward: true,
            commitOptions: {
              subject: "[develop] merge [release/release-one]",
              author: authr,
              style: {
                dot: { color: "#887fce"},
                message: { color: "#3085c7"}
              }
            },
          }).tag("v1.0.0");

          master.merge({
            branch: releaseOne,
            fastForward: true,
            commitOptions: {
              subject: "[master] merge [release/release-one]",
              author: authr,
              style: {
                dot: { color: "#887fce"},
                message: { color: "#969399"}
              }
            },
          }).tag("v1.0.1");


          azure_prod.merge({
            branch: master,
            fastForward: true,
            commitOptions: {
              subject: "[azure-prod] set to emulate [master] | Deploy release/release-one",
              author: authr_ads,
              style: {
                dot: { color: "#969399"},
                message: { color: "#149927"}
              }
            },
          });



        }}
      </Gitgraph>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          ola git flow
        </p>
      </header>
      <main>
        <MyComponent/>
      </main>
    </div>
  );
}

export default App;
