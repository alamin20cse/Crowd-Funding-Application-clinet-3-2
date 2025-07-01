# 🌟 CrowdFunding Application

Welcome to the **CrowdFunding Application** – a full-stack donation-based platform where users can create, browse, and contribute to fundraising campaigns.

---

## 🚀 Features

### 🧑‍💻 User Features

- 📝 **Register/Login via Firebase** (Email/Password & Google Sign-in)
- 📄 **Create Campaigns** with:
  - Title, description, image, type, minimum donation, deadline
- 🎁 **Donate to Campaigns** (Stripe & SSLCommerz integrated)
- 📃 **View All Active Campaigns**
- 📂 **View My Campaigns**
- 💳 **Track My Donations**
- ✍️ **Create & View Blog Posts**
- 🖼️ Upload campaign/blog images via **Cloudinary**

### 🛠️ Admin Features

- 👥 View all users
- 📊 View all payments
- ➕ Add Campaigns
- 📰 Manage Blog Content
- 🔐 Protected routes via JWT and Firebase

---

## 🧩 Technologies Used

### Frontend

- ⚛️ React.js
- 🎨 Tailwind CSS + DaisyUI
- 🔁 React Router DOM
- 🔥 Firebase Authentication
- 📦 Axios + React Query
- 📝 Jodit Rich Text Editor
- 🎞️ Lottie Animations
- 🧠 Context API

### Backend

- 🟢 Node.js + Express.js
- 🛢️ MongoDB + Mongoose
- 🔐 JWT for protected APIs
- 🌍 CORS + dotenv
- 💳 Stripe and SSLCommerz for payments

---

#

---

## 🔐 Authentication & Authorization

- Firebase Authentication for login/registration
- Google sign-in support
- Role-based access via custom `useUsers` hook
- JWT issued from backend and stored in localStorage
- Route guards implemented for:
  - `PrivateRoute`
  - `AdminRoute`

---


## 📱 Responsiveness

- The application is fully **responsive** and adapts seamlessly across devices:
  - ✅ **Large screens (lg)** – Full layout with sidebars and dashboard views
  - ✅ **Medium screens (md)** – Adjusted grid and column layouts for tablets
  - ✅ **Small screens (sm)** – Collapsible menus, stacked content, and optimized form spacing for mobile devices
- Built using **Tailwind CSS**'s utility-first responsive classes (`sm:`, `md:`, `lg:`)

---

## 🧪 Custom Hooks

| Hook | Description |
|------|-------------|
| `useUsers` | Gets logged-in user & role |
| `useAllUsers` | Admin fetches all users |
| `useAllPaymentInfo` | Admin views all donation records |
| `useUserPayments` | Logged-in user sees donation history |
| `useBlog` | Fetches blog posts |
| `useCampaigns` | Loads campaigns for listing & details |

---

## 📦 Important JSON Data

- `/public/districts.json` - All districts for registration dropdown
- `/public/upazilas.json` - Filterable by district

---

## 📂 Key Pages

| Route | Page |
|-------|------|
| `/` | Home with hero slider and campaign preview |
| `/allcampaign` | Show all campaigns |
| `/addcampaign` | Create a new campaign |
| `/dashboard` | User/admin dashboard |
| `/blog` | Public blog page |
| `/blogdetails/:id` | Full blog details |
| `/payment/:id` | Donation payment gateway |
| `/login`, `/signup` | Auth pages |
| `/updateCampaign/:id` | Update campaign page |

---

## 💳 Payment Integration

- Stripe & SSLCommerz are integrated
- Payment page accessible via `Donate` button
- Payment data saved to backend and shown in dashboards

---

## 📈 Future Improvements

- ✅ Email verification in Firebase
- 🔐 Forgot password feature
- 🌍 Convert district/upazila to API
- 📊 Admin campaign analytics
- 🔎 Add search and filter for campaign types

---

## 🔗 Live Site

👉 [Live Demo Link](https://your-live-site-url.com)

---

## 🙌 Acknowledgments

Thanks to all open-source contributors, Firebase, Cloudinary, Stripe, and the React ecosystem for powering this project.

---

## 📜 License

This project is open source and free to use.

