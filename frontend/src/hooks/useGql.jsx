import { useQuery, gql } from "@apollo/client";

const PROJECTS = gql`
  query getProjects {
    projects {
      data {
        id
        attributes {
          name
          year
          type
          duration
          role
          image {
            data {
              attributes {
                url
              }
            }
          }
          description
          conclusion
          intro
          color
          background
        }
      }
    }
  }
`;

export default function useGql() {
  const { loading, error, data } = useQuery(PROJECTS);
  return {
    loading,
    data,
  };
}
