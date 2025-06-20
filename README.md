<h1 align="center">📬 Enquiry CRUD API with Mongoose</h1>

<p align="center">
  <b>A simple and robust RESTful API for managing enquiries using <a href="https://mongoosejs.com/">Mongoose</a> and <a href="https://expressjs.com/">Express.js</a>.</b>
  <br>
  <img src="https://img.shields.io/badge/Node.js-18.x-green?logo=node.js">
  <img src="https://img.shields.io/badge/Express.js-4.x-blue?logo=express">
  <img src="https://img.shields.io/badge/Mongoose-7.x-brightgreen?logo=mongodb">
  <img src="https://img.shields.io/badge/License-MIT-yellow">
</p>

---

## 🚀 Features

- **CRUD Operations:** Create, Read, Update, Delete enquiries
- **MongoDB Integration:** Mongoose for object modeling
- **RESTful API:** Built with Express.js
- **Easy to Use:** Simple endpoints and clear responses

---

## 📁 Project Structure

```
├── app/
│   ├── Controllers/
│   │   └── web/
│   │       └── userEnquirycontrollers.js   # Controller logic for enquiries
│   ├── models/
│   │   └── Enquiry.model.js                # Mongoose enquiry schema/model
│   └── routes/
│       └── web/
│           └── enquiryRoutes.js            # API route definitions
├── index.js                                # Main server file
```

## 🛠️ Installation

```bash
# 1. Clone the repository
git clone https://github.com/GohelHiren/enquiry-crud-api-mongoose.git

# 2. Navigate to the project directory
cd enquiry-crud-api-mongoose

# 3. Install dependencies
npm install

# 4. Start the server
npm start
```

## 📡 Usage

The API will be available at `http://localhost:8000/web/api/enquiry/enquiry-list`

## 📬 API Endpoints

| Method | Endpoint                            | Description             |
| ------ | ----------------------------------- | ----------------------- |
| GET    | /web/api/enquiry/enquiry-list       | Get all enquiries       |
| POST   | /web/api/enquiry/enquiry-insert     | Create a new enquiry    |
| PUT    | /web/api/enquiry/enquiry-update/:id | Update an enquiry by ID |
| DELETE | /web/api/enquiry/enquiry-delete/:id | Delete an enquiry by ID |

### Example Request

```http
POST /web/api/enquiry/enquiry-insert
Content-Type: application/json
{
"name": "john doe",
"email": "john.doe@example.com",
"phone": "1234567890",
"message": "Hello I'm John Doe"
}

```

### Example Response

```
{
  "_id": "60c72b2f9b1e8b001c8e4d3a",
  "name": "john doe",
  "email": "john.doe@example.com",
  "phone": "1234567890",
  "message": "Hello I'm john doe"
}
```

---

## 🤝 Contributing

Contributions are welcome! Please submit a pull request or open an issue for discussion.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

> **Hiren Gohel**

> Made with ❤️ by [HIREN GOHEL](https://github.com/GohelHiren) | LinkedIn [LinkedIn](https://in.linkedin.com/in/hiren-gohel-6986a124b) | portfolio: [https://hirengohelofficial.me/](https://hirengohelofficial.me/)

> Feel free to reach out for any questions or suggestions!
