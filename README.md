<h1>Cabsy Microservices <img src="https://media.giphy.com/media/3oFzmrP8ZDnNZxsyFW/giphy.gif?cid=ecf05e47189oq11pvwdlpv73rpb384h39aru9ns5zbjqimha&ep=v1_gifs_search&rid=giphy.gif&ct=g" 
           height="50" width="250" alt="logo" /></h1>

<p>Welcome to the <strong>Cabsy Microservices</strong> repository! This project demonstrates a microservices architecture for a cab booking system, focusing on scalability, maintainability, and efficient service communication.</p>

<h2>Table of Contents</h2>
<ul>
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#microservices-architecture">Microservices Architecture</a></li>
  <li><a href="#services-overview">Services Overview</a></li>
  <li><a href="#getting-started">Getting Started</a></li>
</ul>

<h2 id="introduction">Introduction</h2>
<p><strong>Cabsy</strong> is a conceptual cab booking platform designed to showcase the implementation of microservices in a real-world application. By decomposing the system into distinct services, it ensures better scalability and easier maintenance.</p>

<h2 id="microservices-architecture">Microservices Architecture</h2>
<p>A <strong>microservices architecture</strong> structures an application as a collection of small, autonomous services modeled around a business domain. Each service:</p>
<ul>
  <li>Runs in its own process.</li>
  <li>Communicates with other services via lightweight protocols (e.g., HTTP, messaging queues).</li>
  <li>Is developed, deployed, and scaled independently.</li>
  <li>Encapsulates its own data storage, ensuring data sovereignty.</li>
</ul>
<p>This approach contrasts with monolithic architectures by promoting flexibility, resilience, and faster time-to-market for new features.</p>

<h2 id="services-overview">Services Overview</h2>
<p>The Cabsy system comprises the following microservices:</p>
<ul>
  <li><strong>User Service (<code>user/</code>)</strong>: Manages user registration, authentication, and profiles.</li>
  <li><strong>Captain Service (<code>captain/</code>)</strong>: Handles driver (referred to as "captains") registration, authentication, and profiles.</li>
  <li><strong>Ride Service (<code>ride/</code>)</strong>: Manages ride requests, assignments, and tracking.</li>
  <li><strong>Gateway Service (<code>gateway/</code>)</strong>: Acts as an API gateway, routing requests to the appropriate services and handling cross-cutting concerns like authentication and rate limiting.</li>
</ul>

<h2 id="getting-started">Getting Started</h2>

<h3>Clone the Repository</h3>
<pre><code>git clone https://github.com/shreyansh-21/Cabsy-Microservices.git</code></pre>

<h3>Navigate to the Project Directory</h3>
<pre><code>cd Cabsy-Microservices/Micro-Services-main</code></pre>

<h3>Service Setup</h3>
<p>Navigate to each service directory (e.g., <code>user/</code>, <code>captain/</code>) and follow the setup instructions provided in their respective README files.</p>

<h3>Run Services</h3>
<p>Start each service individually. Ensure that inter-service communication configurations (e.g., URLs, ports) are correctly set.</p>

<h3>Access the System</h3>
<p>Use the Gateway Service endpoints to interact with the system, as it routes requests to the appropriate microservices.</p>


