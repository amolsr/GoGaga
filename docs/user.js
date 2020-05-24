module.exports = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'GoGaga',
        contact: {
            name: 'Amol Saini',
            email: 'amol.saini567@gmail.com'
        }
    },
    servers: [{
        url: 'http://localhost:3000/',
        description: 'Local server'
    },
    // {
    //   url: 'https://api_url_testing',
    //   description: 'Testing server'
    // },
    {
        url: 'https://gogaga.herokuapp.com/',
        description: 'Production server'
    }
    ],
    tags: [{
        name: 'User API'
    }],
    paths: {
        '/gogaga/add': {
            post: {
                tags: ['User API'],
                description: 'Create User',
                operationId: 'addUser',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                example: {
                                    "name": "Amol Saini",
                                    "email": "amol@gmail.com",
                                    "mobile": 8126544009,
                                    "password": "12345678",
                                    "age": 21,
                                    "maritalStatus": "Single",
                                    "company": "GoGaga",
                                    "education": "AKGEC, Ghaziabad",
                                    "location": "Ghaziabad"
                                }
                            }
                        }
                    }
                },
                responses: {
                    '200': {
                        description: 'User is created',
                        content: {
                            'application/json': {
                                schema: {
                                    type: "object",
                                    properties: {
                                        result: {
                                            type: "object",
                                            $ref: '#/components/schemas/User'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        '/gogaga/list': {
            get: {
                tags: ['User API'],
                description: 'Get User',
                operationId: 'getUser',
                responses: {
                    '200': {
                        description: 'Users are fetched',
                        content: {
                            'application/json': {
                                schema: {
                                    type: "object",
                                    properties: {
                                        results: {
                                            type: "array",
                                            items: {
                                                type: "object",
                                                $ref: '#/components/schemas/User'
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    components: {
        schemas: {
            User: {
                type: 'object',
                properties: {
                    _id: {
                        type: 'string',
                        example: "$2b$10$GE3Ck0WROXwrSew0kD2nBup11rGrfoVl5TNTY0ETML968wCXqEZzm"
                    },
                    name: {
                        type: 'string',
                        example: "Amol Saini"
                    },
                    age: {
                        type: 'number',
                        example: 21
                    },
                    maritalStatus: {
                        type: 'string',
                        example: 'Single'
                    },
                    company: {
                        type: 'string',
                        example: 'GoGaga'
                    },
                    education: {
                        type: 'string',
                        example: 'AKGEC, Ghaziabad'
                    },
                    email: {
                        type: 'string',
                        example: "amol@gmail.com"
                    },
                    mobile: {
                        type: 'number',
                        example: 9876543210
                    },
                    location: {
                        type: 'string',
                        example: 'Ghaziabad'
                    },
                    password: {
                        type: 'string',
                        example: "$2b$10$GE3Ck0WROXwrSew0kD2nBup11rGrfoVl5TNTY0ETML968wCXqEZzm"
                    },
                    createdAt: {
                        type: "string",
                        example: "2020-05-13T06:17:37.592Z"
                    },
                    updatedAt: {
                        type: "string",
                        example: "2020-05-13T06:17:37.592Z"
                    }
                }
            }
        }
    }
};