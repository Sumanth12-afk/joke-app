
# 🎭 Random Joke App | DevOps Engineer Portfolio Project

A full-stack joke web application designed to showcase a complete DevOps pipeline using modern tooling. Built with a **Node.js backend** and a **React frontend**, this project demonstrates infrastructure automation using **Azure DevOps**, **Docker**, **Kubernetes (Minikube)**, and **GitHub/Azure Repos**.

---

## 🎯 Project Objectives

- Expose a backend API to return a random joke from a list
- Build a frontend React app that fetches and displays jokes
- Automate build & deployment using Azure DevOps pipelines (CI/CD)
- Use Docker to containerize apps and Kubernetes (Minikube) to orchestrate
- Enable cross-pipeline triggering between CI and CD stages

---

## 🧱 Tech Stack

| Layer        | Tool/Framework            |
|--------------|---------------------------|
| Frontend     | React (React App)  |
| Backend      | Node.js (Express.js)      |
| Version Control | Git + Azure Repos & GitHub |
| CI/CD        | Azure DevOps Pipelines    |
| Containerization | Docker (multi-stage builds) |
| Orchestration | Kubernetes (Minikube)    |
| Hosting      | Local Minikube NodePort   |

---

## 🗂️ Project Structure

```
.
├── backend/                   # Node.js backend API
│   ├── index.js               # Main Express server
│   ├── Dockerfile             # Production-ready multi-stage build
├── frontend/                  # React frontend app
│   ├── src/App.js             # UI logic to fetch and display jokes
│   ├── src/index.js           # React entry point
│   ├── Dockerfile             # Production build with serve
├── k8s/                       # Kubernetes manifests
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   ├── frontend-service.yaml
├── screenshots/               # Screenshots of pipeline, UI, and k8s
├── azure-pipelines-ci.yml     # CI pipeline: builds backend and frontend
├── azure-pipelines-cd.yml     # CD pipeline: deploys to Minikube after CI
└── README.md
```

---

## 🚀 Setup & Deployment Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Sumanth12-afk/joke-app.git
cd joke-app
```

### 2. Start Minikube

```bash
minikube start
```

### 3. Build Docker Images Inside Minikube

```bash
minikube image build -t jokes-backend ./backend
minikube image build -t jokes-frontend ./frontend
```

### 4. Deploy to Kubernetes

```bash
kubectl apply -f k8s/
```

### 5. Access the App

```bash
minikube service jokes-frontend
```

---

## 🔁 Azure DevOps Pipelines

### ✅ `azure-pipelines-ci.yml` (CI)

- Triggers on push to `master`
- Installs Node.js dependencies
- Builds backend and frontend

### ✅ `azure-pipelines-cd.yml` (CD)

- Automatically triggered after CI finishes
- Pulls Kubernetes manifests and applies them to Minikube

### 🔗 Cross-Pipeline Trigger

The CD pipeline includes this in its YAML:

```yaml
resources:
  pipelines:
    - pipeline: buildPipeline
      source: joke-app
      project: joke-app
      trigger: true
```

This ensures CD runs automatically after a successful CI pipeline.

---

## 🧩 Kubernetes Best Practices Used

- `imagePullPolicy: Never` for local images in Minikube
- `livenessProbe` and `readinessProbe` added for health checks
- `resources.requests` and `resources.limits` defined per container
- `labels` and `selectors` used for service targeting

---

## 🖼️ Screenshots

- Azure DevOps Pipeline Runs
- Project UI (React App)

Available in the `screenshots/` directory.

---

## 🧠 Learning Outcomes

- Building CI/CD pipelines from scratch in Azure DevOps
- Automating container builds and Kubernetes deployments
- Debugging image pull issues and local registry conflicts
- Connecting independent pipelines via resource triggers

---

## 👨‍💻 Author

**Sumanth Nallandhigal**  
🔗 [GitHub Profile](https://github.com/Sumanth12-afk)  
📧 *Email available on request*
