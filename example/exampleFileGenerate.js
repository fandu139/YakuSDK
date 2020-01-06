const generateFileSchema = require('../dist/index.js')

async function generateQuery(){
  const result = await generateFileSchema.generateFile({
    createFile: `launchesPast`,
    method: `query`,
    dataFile: 
    `query launchesPast {
      launchesPast(limit: 1) {
        mission_name
        launch_date_local
        launch_site {
          site_name_long
        }
        links {
          article_link
          video_link
        }
        rocket {
          rocket_name
          first_stage {
            cores {
              flight
              core {
                reuse_count
                status
              }
            }
          }
          second_stage {
            payloads {
              payload_type
              payload_mass_kg
              payload_mass_lbs
            }
          }
        }
        ships {
          name
          home_port
          image
        }
      }
    }`
  });
}

async function generateMutation(){
  const result = await generateFileSchema.generateFile({
    createFile: `insert_users`,
    method: `mutation`,
    dataFile: 
    `mutation insert_users {
      insert_users(objects: {name: "Azkia Aisyah Lakuana", rocket: "child"}) {
        returning {
          id
          name
          rocket
          timestamp
          twitter
        }
      }
    }`
  });
}

async function generateMutationUpdate(){
  const result = await generateFileSchema.generateFile({
    createFile: `update_users`,
    method: `mutationUpdate`,
    dataFile: 
    `mutation update_users {
      update_users(where: {name: {_eq: "Azkia Fandu Aisyah Lakuana"}, rocket: {_eq: "child"}}, _set: {name: "Azkia Fandu Aisyah Lakuana"}) {
        returning {
          id
          name
          rocket
          timestamp
          twitter
        }
      }
    }`
  });
}

generateQuery();
generateMutation();
generateMutationUpdate();
