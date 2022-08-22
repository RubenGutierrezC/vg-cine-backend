import { errorResponses } from "./errorPaths.mjs";

export const getMovies = {
  tags: ["Movies APIs"], // operation's tag.
  parameters: [
    {
      in: "query",
      name: "all",
      schema: {
        type: "string",
        example: "false",
      },
    },
  ],
  description: "API para consultar todas las peliculas", // operation's desc.
  // expected responses
  responses: {
    // response code
    200: {
      description: "Respuesta exitosa", // response desc.
      content: {
        // content-type
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "ok ",
              },
              data: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/Movie",
                },
              },
            },
          },
        },
      },
    },
    ...errorResponses,
  },
};

export const getMovieDetail = {
  tags: ["Movies APIs"], // operation's tag.
  parameters: [
    {
      in: "oath",
      name: "id",
      schema: {
        type: "number",
        example: "610150",
      },
    },
  ],
  description: "API para consultar una pelicula", // operation's desc.
  // expected responses
  responses: {
    // response code
    200: {
      description: "Respuesta exitosa", // response desc.
      content: {
        // content-type
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "ok ",
              },
              data: {
                type: "object",
              },
            },
          },
        },
      },
    },
    ...errorResponses,
  },
};
