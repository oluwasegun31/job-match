# AI-Powered Job Match Dashboard

This project is a Skill-Based Job Matching Application that dynamically calculates the match score between a user's skills and job requirements. It displays job postings and allows users to see how well they match each job based on their skills.

---

## **Features**

- Displays job listings with title, company, location, and salary range.
- Visualizes match scores using color-coded badges (Green, Yellow, Red).
- Provides detailed job information and required skills in a modal.
- Implements a mock "Apply Now" button with skill-based alerts.
- Fully responsive design for various screen sizes.
- Dynamically calculates match scores based on required skills and user skills.
- User skills are managed through a Context API, simulating a user profile.

---

## **Technology Stack**

- React
- Tailwind CSS
- Context API
- Fetch API

---

## **Match Score Calculation**

The match score is calculated by comparing the job's required skills with the user's skills. A percentage is generated based on the number of matching skills.

---

## **Folder Structure**

#### **1. public/**

- Contains static files that are served directly by the server.
- **mockData.json**: A JSON file with mock job data used to simulate API responses.

#### **2. src/assets/**

- Stores static assets like images, icons, and other media files.

#### **3. src/components/**

- Contains reusable React components that make up the UI.
  - **Navbar.jsx**: The navigation bar displayed at the top of the application.
  - **Hero.jsx**: The hero section, typically used for a welcome message or call-to-action.
  - **JobList.jsx**: Displays a list of job postings.
  - **JobDetails.jsx**: Shows detailed information about a selected job.
  - **CardSkeleton.jsx**: A skeleton loader component used while data is being fetched.

#### **4. src/context/**

- Manages global state using React Context API.
  - **JobContext.jsx**: Provides user skills data to components that need it.

#### **5. src/services/**

- Contains service functions for interacting with APIs or mock data.
  - **api.js**: Includes functions to fetch job data from the mock API.

#### **6. src/utils/**

- Stores utility functions that are shared across the application.
  - **calculateMatchScore.js**: A function to calculate the match score between user skills and job requirements.

#### **7. src/App.jsx**

- The main application file that combines all components and renders the app.

#### **8. src/main.jsx**

- The entry point for the React application, where the app is mounted to the DOM.

#### **9. src/index.css**

- Contains global CSS styles for the application.

#### **10. Configuration Files**

- **vite.config.js**: Configuration for Vite, the build tool used in this project.

---

## **How to Run the project**

1.  Clone the repository: `git clone https://github.com/oluwasegun31/job-match.git`
2.  Navigate to the project directory: `cd job-match`
3.  Install dependencies: `npm install`
4.  Run the development server: `npm run dev`
5.  Open your browser and navigate to `http://localhost:5173`

---
