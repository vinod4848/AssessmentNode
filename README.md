 <!-- 

 npm install

 start script:= npm run dev

postman collection response

Post: http://localhost:3000/auth/register
{
"username": "abhilash",
"password": "abhilash@12345"
}


post  http://localhost:3000/auth/login
{
    "username": "abhilash",
    "password": "abhilash@12345"
}


 post http://localhost:3000/posts/
 {
    "title": "My First Post",
    "body": "This is the content of my first post.",
    "active": false,
    "latitude": 37.7749,
 }

put http://localhost:3000/posts/:postId
{
  "title": "My First Post",
    "body": "This is the content of my first post.",
    "active": false,
    "latitude": 37.7749,
}

Delete  http://localhost:3000/posts/:postId


 get http://localhost:3000/posts/byLocation/:latitude/:longitude


  get http://localhost:3000/posts/dashboardCounts
