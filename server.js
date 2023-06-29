const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/bmicalculator", function (request, response) {
  response.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", function (request, response) {
  let weightValue = parseFloat(request.body.weight);
  let heightValue = parseFloat(request.body.height);

  let result = weightValue / (heightValue * heightValue);
  response.send("Your BMI is " + Math.floor(result));
})
app.listen(3000, function () {
  console.log("Server is running on port 3000.")
})

