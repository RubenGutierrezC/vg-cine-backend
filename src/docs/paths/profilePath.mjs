export const getProfile = {
    tags: ["Profile APIs"], // operation's tag.
    description: "API para ver perfil", // operation's desc.
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
                    $ref: "#/components/schemas/Profile",
                  },
                },
              },
            },
          },
        },
      },
    },
  };
  