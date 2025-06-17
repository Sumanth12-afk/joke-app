
# 🎭 Random Joke App | DevOps Engineer Portfolio Project

This project is a full-stack joke web application designed to showcase modern DevOps practices from end-to-end. It combines a **Node.js backend**, a **React frontend**, and integrates **CI/CD pipelines** using **Azure DevOps**, **Docker**, and **Kubernetes (Minikube)**.  
Ideal for demonstrating real-world DevOps engineering experience across development, testing, containerization, orchestration, and deployment.

---

## 🎯 Objective

To develop and deploy a lightweight full-stack application that serves random jokes, while integrating and automating a complete DevOps lifecycle: build, test, containerize, deploy, and expose to users.  
This project serves as a hands-on demonstration of managing infrastructure and deployments efficiently using open-source DevOps tools.

---

## 🌟 Features

- Fully containerized Node.js API serving jokes.
- React frontend that consumes the joke API.
- Multi-stage Docker builds for production-ready images.
- Azure DevOps pipeline automating CI/CD steps.
- Kubernetes YAMLs for backend and frontend deployment.
- Minikube setup with NodePort service to access locally.
- Preemptive handling of known K8s issues (e.g., ImagePullBackOff).

---

## 🔧 Tech Stack

| Layer        | Technology         |
|--------------|--------------------|
| Frontend     | React (create-react-app) |
| Backend      | Node.js (Express.js) |
| CI/CD        | Azure DevOps Pipelines |
| Containers   | Docker (multi-stage builds) |
| Orchestration| Kubernetes (Minikube) |
| Version Control | Git + Azure Repos |
| Hosting      | Local via Minikube NodePort |

---

## 🗂️ Folder Structure

```
.
├── backend/                # Node.js API
│   └── Dockerfile
├── frontend/               # React frontend app
│   └── Dockerfile
├── k8s/                    # Kubernetes manifests
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   └── frontend-service.yaml
├── screenshots/            # App & pipeline screenshots
├── azure-pipelines.yml     # Azure DevOps CI/CD pipeline config
└── README.md
```

---

## 🚀 Step-by-Step Deployment Guide

### 1. Clone the Repository

```bash
git clone https://github.com/Sumanth12-afk/joke-app.git
cd joke-app
```

### 2. Start Minikube

```bash
minikube start
```

### 3. Build Docker Images INSIDE Minikube

```bash
minikube image build -t jokes-backend ./backend
minikube image build -t jokes-frontend ./frontend
```

### 4. Add `imagePullPolicy: Never` in K8s YAMLs

```yaml
imagePullPolicy: Never
```

### 5. Deploy Services to Minikube

```bash
kubectl apply -f k8s/
```

### 6. Access Frontend in Browser

```bash
minikube service jokes-frontend
```

---

## 🔁 Azure DevOps CI/CD Workflow

### Trigger: Code push to `master` branch

### Pipeline Steps

1. **Checkout Code**
2. **Install Backend Dependencies**
   ```bash
   cd backend && npm install
   ```
3. **Install Frontend Dependencies**
   ```bash
   cd frontend && npm install && npm run build
   ```
4. **Run Linting and Tests**
5. **Build Docker Images**
6. **Push to Container Registry (optional if Minikube used)**
7. **Post-deployment Notifications (future extension)**

---

## 🔥 Common Issues & Debugging Tips

### ❌ `ImagePullBackOff`
**Reason**: K8s tries pulling from remote registry.  
**Fix**: Use `minikube image build` and set `imagePullPolicy: Never`.

---

### ❌ `React app not accessible`
**Reason**: React dev server binds to `localhost`.  
**Fix**: Switch to `serve -s build` in production Dockerfile.

---

### ❌ Docker Context Errors in PowerShell
**Fix**: Avoid switching Docker context. Use `minikube image build` to stay native.

---

### ❌ Git Push Fails (e.g. non-fast-forward)
**Fix**:
```bash
git pull origin master --rebase
git push origin master
```

---

## 📸 Screenshots

Screenshots of the deployed frontend and pipeline stages are available in the `screenshots/` folder.

---

## 🧠 Learning Outcomes

- Designed a microservice-style architecture.
- Implemented CI/CD automation with Azure DevOps.
- Built and deployed Docker containers to Kubernetes.
- Learned how to debug and fix orchestration issues in real-time.
- Delivered a fully working app with frontend-backend separation.

---


## 📄 File-by-File Explanation

### `azure-pipelines.yml`
Defines the Azure DevOps CI/CD pipeline. Automates steps such as installing dependencies, running tests, building Docker images, and preparing them for deployment.

### `backend/Dockerfile`
Multi-stage Dockerfile for the backend. First installs dependencies, then copies the source code and sets the start command. It creates a small, production-optimized image.

### `backend/index.js`
Main entry point of the Node.js backend. Sets up an Express server with a `/api/joke` endpoint that returns a random joke in JSON format.

### `frontend/Dockerfile`
Multi-stage Dockerfile for the React frontend. Builds the production app using Node, then serves it using `serve` for lightweight static file hosting.

### `frontend/src/App.css`
Custom styles for the React frontend, including layout, typography, and joke display styling.

### `frontend/src/App.js`
Main component in React. Handles rendering of the joke, UI elements like category selection, and fetch logic for the joke API.

### `frontend/src/index.css`
Global styles for the React app. Usually includes resets and base styles.

### `frontend/src/index.js`
Entry point of the React app. Renders the `<App />` component into the root DOM node.

### `k8s/backend-deployment.yaml`
Kubernetes Deployment for the backend service. Specifies pod replicas, container image, ports, and the `imagePullPolicy: Never` setting for local Minikube use.

### `k8s/backend-service.yaml`
Kubernetes Service (ClusterIP/NodePort) to expose the backend deployment. Enables frontend to communicate with the API.

### `k8s/frontend-deployment.yaml`
Kubernetes Deployment for the frontend. Manages the number of replicas, container image, and sets up the pod spec for the React app.

### `k8s/frontend-service.yaml`
Kubernetes NodePort Service that exposes the frontend on a browser-accessible port. Used by `minikube service jokes-frontend` to open the app locally.


## 👨‍💻 Author

**Sumanth Nallandhigal**  
📎 [GitHub](https://github.com/Sumanth12-afk)  
📧 *Email available on request*
