<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>${appdescription}</title>
    <script type="text/javascript" src="/static/vendor/jquery/dist/jquery.js"></script>
    <script type="text/javascript" src="/static/vendor/bacon/dist/Bacon.js"></script>
    <script type="text/javascript" src="/static/arkanoid-sample.js"></script>
    <style type="text/css">
        body {
            text-align: center;
        }

        .block {
            border: 1px black solid;
        }

        #gamecanvas {
            width: 400px;
            height: 400px;
            margin: 0 auto;
            padding: 0;
        }

        #vaus {
            margin: 0;
            width: 40px;
            height: 5px;
            background-color: gray;
            position: relative;
            top: 390px;
            left: 0;
        }

        #ball {
            width: 2px;
            height: 2px;
            background-color: black;
            position: relative;
            top: 200px;
            left: 200px;
        }
    </style>
</head>
<body>
<h1>Arkanoid</h1>

<div id="gamecanvas" width="400" height="400" class="block">
    <div id="ball" class="block"></div>
    <div id="vaus" class="block"></div>
</div>
</body>
</html>
