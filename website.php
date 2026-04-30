<?php
// Check if form submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST['name']);
    $goal = htmlspecialchars($_POST['goal']);

} else {
    header("Location: index.html");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Goal Submitted</title>
    <style>
        body{
            font-family: Arial;
            background: linear-gradient(135deg,#e8f5e9,#f4f4f4);
            text-align:center;
            padding-top:80px;
        }

        .box{
            background:white;
            display:inline-block;
            padding:30px;
            border-radius:15px;
            box-shadow:0 10px 25px rgba(0,0,0,0.1);
        }

        h1{
            color:#27ae60;
        }

        p{
            font-size:18px;
        }

        a{
            display:inline-block;
            margin-top:15px;
            text-decoration:none;
            background:#27ae60;
            color:white;
            padding:10px 15px;
            border-radius:8px;
        }
    </style>
</head>

<body>

<div class="box">
    <h1>🎯 Goal Submitted Successfully!</h1>

    <p><b>Name:</b> <?php echo $name; ?></p>
    <p><b>Your Goal:</b> <?php echo $goal; ?></p>

    <a href="index.html">⬅ Back to Home</a>
</div>

</body>
</html>