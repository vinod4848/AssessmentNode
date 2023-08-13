 <!-- 

 npm install

 start script:= npm run dev || npm start

postman collection response

Post: http://localhost:3000/auth/register
{
"username": "vinod2",
"password": "vinod@12345"
}


post  http://localhost:3000/auth/login
{
    "username":"vinod2",
    "password":"vinod@12345"

}


 post http://localhost:3000/posts/
 {
    "title": "My First Post",
    "body": "This is the content of my first post.",
    "active": false,
    "latitude": 37.7749,
 }

put http://localhost:3000/posts/64d8cf7801566528c0981b8b
{
    "title": "Updated Post Title1",
    "body": "Updated Post Bodyaxz111",
    "active": false,
    "latitude": 123.456,
    "longitude": 78.901
}

 get http://localhost:3000/posts/getAllPosts 

Delete  http://localhost:3000/posts/64d8cf7801566528c0981b8b


 get http://localhost:3000/posts/byLocation/40.7128/-74.0060

get http://localhost:3000/posts/dashboardCounts
