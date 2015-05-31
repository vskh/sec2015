<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>${appdescription} - Hashtagger</title>
    <script type="text/javascript" src="/static/jquery/dist/jquery.js"></script>
    <script type="text/javascript" src="/static/rxjs/dist/rx.all.js"></script>
    <script type="text/javascript" src="/static/hashtagger-${type}.js"></script>
    <style type="text/css">
        .view {
            width: 100%;
            height: 200px;
            border: 1px black solid;
        }
        #textout {
            background-color: lightcoral;
        }
    </style>
</head>
<body>
    <h2>Hash tagger</h2><a href="/hashtagger/usual">usual</a> | <a href="/hashtagger/reactive">reactive</a><br/>
    <br/>
    Type in letters into text area to split them by words and convert to twitter hashtags
    <textarea id="textin" class="view"></textarea>
    <div id="textout" class="view"></div>
</body>
</html>
