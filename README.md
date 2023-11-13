# Threads Clone
A next-generation forum platform inspired threads. Built on Next.js  and MongoDB, Threads Clone offers a modern and scalable solution for hosting threaded conversations.

## Features
- **Threaded Discussions:** Engage in organized and easy-to-follow discussions with threaded replies.
- **User Authentication:** Securely manage user identities using [Clerk](https://clerk.dev/) for authentication, offering seamless sign-in and sign-up experiences.
- **Responsive Design:** A mobile-friendly interface ensures a seamless user experience across devices.

## Getting Started
### Prerequisites

- Node.js (version 13.4.16)
- MongoDB
- [Clerk API Keys](https://clerk.com/docs/quickstarts/nextjs) (for authentication)
### Installation

1. Clone the repository: `git clone https://github.com/your-username/threads-clone.git`
2. Navigate to the project directory: `cd threads-clone`
3. Install dependencies: `npm install`
4. Set up your MongoDB connection and Clerk authentication keys in the `.env` file.
### Configuration
Update the configuration in the `.env` file with your MongoDB connection string, Clerk API keys, and other relevant details.

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key CLERK_SECRET_KEY=your_clerk_secret_key NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/ MONGODB_URL=your_mongodb_connection_string UPLOADTHING_SECRET=your_uploadthing_secret UPLOADTHING_APP_ID=your_uploadthing_app_id
```

### Running the Application
1. Start the development server: `npm run dev`
2. Open your browser and visit `http://localhost:3000`