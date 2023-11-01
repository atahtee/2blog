# 2blog - A MERN Stack Blogging Web Application

2blog is a full-stack web application that allows users to sign up and log in to write and read stories. It's built using the MERN (MongoDB, Express.js, React, Node.js) stack, providing a responsive and interactive platform for sharing and exploring stories.



## Features

- User Authentication: Register and log in securely to manage your stories.
- Create Stories: Write and publish your own stories with rich text formatting.
- Read Stories: Explore a collection of stories shared by the community.
- Comments: Engage with the stories by leaving comments and feedback.
- Responsive Design: Enjoy a seamless experience on various devices.

## Technologies Used

- MongoDB: A NoSQL database for storing user data, stories, and comments.
- Express.js: A back-end framework to handle server operations and API endpoints.
- React: A front-end library for building a dynamic and user-friendly interface.
- Node.js: A server environment for running the back-end logic.
- Vercel: The hosting platform where the application is deployed.

## Getting Started

To run the 2blog application locally, follow these steps:

1. Clone the repository:

2. Install dependencies for both the client and server:

3. Set up your environment variables. You'll need a MongoDB URI, JWT secret, and other necessary variables.

4. Run the server and client separately:
- In the server directory, run:
  ```
  nodemon index.js (or wherever your server will be located)
  ```
- In the client directory, run:
  ```
  npm run dev (for those using vite)
  ```

5. Access the application locally at `http://localhost:5173`.

## Deployment

The 2blog application is hosted on [2blog-vercel.app](https://2blog-atahtee.vercel.app/). The deployment is managed through Vercel, making it easy to host your own instance.
Also, the first initial loading might be painfully slow as I'm using the render free-tier as the server host . :(

## Contributing

We welcome contributions! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/new-feature`.
3. Make your changes and commit them: `git commit -m 'Add a new feature'`.
4. Push to your fork: `git push origin feature/new-feature`.
5. Create a pull request to the `main` branch of this repository.

Please review our [Contribution Guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, feel free to contact us at atatisam14@email.com.

Happy blogging!
