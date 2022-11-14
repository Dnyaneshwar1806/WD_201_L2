<html>
<head>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body style="text-align: center">  
    <form id="user-form" method="post">
    <div style="
        border-radius: 50px;
        border: 10px solid transparent;
        margin-left: 450px;
        margin-right: 450px;
        background: linear-gradient(45deg,red,blue) border-box">
      <h1 style="text-decoration: underline; color: beige;"/>Details of Candidate</h1>

      <li ><label for="text">Name: </label>
      <input required type="text" id="name" name="name"></li>
      <p></p>
        <li><label for="email">Email: </label>
      <input required type="email" id="email" name="email" ></li>
      <p></p>
        <li><label required for="password">Password: </label>
      <input required type="password" id="password" name="password" ></li>
      <p></p>
        <li><label for="dob">Date of Birth: </label>
      <input type="date" id="dob" name="dob"></li>
      <p></p>
      <label for="acceptTerms">Accepted Terms & Conditions </label>
      <input type="checkbox" name="acceptTerms" id="acceptTerms" >
      <p></p>
      <button required class="button" type="submit" style="--x: 50%;
      --y: 50%;
      position: relative;
      appearance: none;
      padding: 1em 2em;
      color: white;
      cursor: pointer;
      outline: none;
      border-radius: 100px;
  
      border: 2px solid transparent;
      background: linear-gradient(#000, #000) padding-box, radial-gradient(farthest-corner at var(--x) var(--y), #00C9A7, #845EC2) border-box;
  ">submit</button>
      <p></p>
    </div>
  </form>
  <div class="relative bg-white px-4 mt-5 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-lg sm:px-10 ">
    <div class="mx-auto">
        <h2 class="text-xl text-center font-bold leadin-right">Entries</h2>
        <div class="divide-y divide-gray-300/50" id="user-entries"></div>
    </div>
</div>
  <script src="registrationStyling.js"></script>
</body>
</html>
