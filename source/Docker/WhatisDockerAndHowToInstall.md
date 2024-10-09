**Docker** is a platform that enables developers to automate the deployment, scaling, and management of applications in containers. It allows you to package an application and its dependencies into a single container, ensuring consistent performance across different environments.

### Key Features of Docker
- **Containerization**: Create and manage containers easily.
- **Portability**: Run containers on any system that supports Docker, regardless of the underlying environment.
- **Isolation**: Containers run in isolation, preventing conflicts between applications.
- **Ecosystem**: Extensive tools and services, including Docker Hub for sharing containers.

![Docker Logo](https://blog.codewithdan.com/wp-content/uploads/2023/06/Docker-Logo.png)

### Installing Docker

The installation process varies depending on your operating system. Here’s a general guide for the most common platforms:

#### For Windows:

1. **Download Docker Desktop**:
   - Go to the [Docker Desktop download page](https://www.docker.com/products/docker-desktop).
   
2. **Install Docker Desktop**:
   - Run the downloaded installer.
   - Follow the installation instructions. You might need to enable WSL 2 (Windows Subsystem for Linux) if prompted.

3. **Start Docker**:
   - After installation, launch Docker Desktop from the Start menu.
   - Ensure Docker is running by checking the system tray for the Docker icon.

#### For macOS:

1. **Download Docker Desktop**:
   - Visit the [Docker Desktop download page](https://www.docker.com/products/docker-desktop).

2. **Install Docker Desktop**:
   - Open the downloaded `.dmg` file.
   - Drag the Docker icon to the Applications folder.

3. **Start Docker**:
   - Launch Docker from the Applications folder.
   - Verify that Docker is running by checking the menu bar for the Docker icon.

#### For Linux:

The installation process may vary slightly depending on your distribution. Below are the steps for **Ubuntu**:

1. **Update the Package Index**:
   ```bash
   sudo apt-get update
   ```

2. **Install Required Packages**:
   ```bash
   sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
   ```

3. **Add Docker’s Official GPG Key**:
   ```bash
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
   ```

4. **Set Up the Stable Repository**:
   ```bash
   sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
   ```

5. **Update the Package Index Again**:
   ```bash
   sudo apt-get update
   ```

6. **Install Docker CE (Community Edition)**:
   ```bash
   sudo apt-get install docker-ce
   ```

7. **Start Docker**:
   ```bash
   sudo systemctl start docker
   ```

8. **Enable Docker to Start on Boot**:
   ```bash
   sudo systemctl enable docker
   ```

9. **Verify Installation**:
   Run the following command to ensure Docker is installed correctly:
   ```bash
   docker --version
   ```

### Post-Installation Steps
After installation, you may want to run Docker as a non-root user. To do this:

1. **Add Your User to the Docker Group**:
   ```bash
   sudo usermod -aG docker $USER
   ```

2. **Log out and back in** for the group changes to take effect.

### Running a Test Container
To verify that Docker is working correctly, you can run a test container:

```bash
docker run hello-world
```

This command pulls a test image and runs it, displaying a message confirming that Docker is installed correctly.

Now you're all set up with Docker! If you have any questions or need further assistance, feel free to ask.
[What is Kubernetes?](https://github.com/NicholasMelito/IS373/wiki/What-is-Kubernetes-and-can-i-install-on-my-pc%3F)
