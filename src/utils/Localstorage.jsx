const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare Monthly Report",
          "taskDescription": "Compile the sales data for the monthly report.",
          "taskDate": "2025-01-16",
          "category": "Reporting"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Team Meeting",
          "taskDescription": "Attend the weekly team meeting and share updates.",
          "taskDate": "2025-01-15",
          "category": "Meetings"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Client Presentation",
          "taskDescription": "Prepare slides for the upcoming client presentation.",
          "taskDate": "2025-01-20",
          "category": "Client Work"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Update Website Content",
          "taskDescription": "Revise the About Us and Services pages.",
          "taskDate": "2025-01-17",
          "category": "Web Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Submit Expense Report",
          "taskDescription": "Complete and submit last month's expenses.",
          "taskDate": "2025-01-12",
          "category": "Finance"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Research Competitors",
          "taskDescription": "Analyze the top competitors in our industry.",
          "taskDate": "2025-01-18",
          "category": "Research"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Organize Workshop",
          "taskDescription": "Plan the agenda and logistics for the workshop.",
          "taskDate": "2025-01-22",
          "category": "Training"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Design Marketing Campaign",
          "taskDescription": "Create a new campaign for product launch.",
          "taskDate": "2025-01-19",
          "category": "Marketing"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Customer Feedback Review",
          "taskDescription": "Analyze feedback from the recent survey.",
          "taskDate": "2025-01-21",
          "category": "Customer Service"
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];

  export const setLocalStorage = ()=>{
       localStorage.setItem('employees',JSON.stringify(employees))
       localStorage.setItem('admin',JSON.stringify(admin))
  }
  
  export const getLocalStorage = ()=>{
 const employees = JSON.parse(localStorage.getItem('employees')
)
const admin = JSON.parse(localStorage.getItem('admin')
)
  console.log(employees,admin)
  }