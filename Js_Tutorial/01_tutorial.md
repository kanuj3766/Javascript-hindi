# Three places to put Javascript code
1. <b>Code between the body</b><br>

Example
<script type="text/javascript"><br>
    document.Write("Javascript is a simple language");<br>
</script>

-The script tag specifies that we are using javascript .<br>
-The text/javascript is the content type that provides information to the browser about the data.<br>
-The document.Write() function is used to display dynamic content through javascript.<br>


2.<b> Code between the head tag</b><br>
Example

We are creating a function msg(). To create function in javascript. You need to write function with function name as given below.
To call function, you need to work on event . Here we are using onclick event to call msg() function.

<html>
<head>
<script type="text/javascript"><br>
    function msg(){ <br>
        alert("Hello javasript");<br>
    }
</script>
</head>
<body>
<p> Welcome to JavaScript </p> <br>
<form> 
<input type= "button" value ="click" onclick="msg()"/>
</form>
</body>
</html>


<b>3. External javascript file</b>
We can create external  javascript file and embbed it in many html page.<br>
It provides code re-useability because Single javascript file can be used in several html pages.<br>
At external Javascript file must be saved by js extension. It is recommended to embbed all javascript files into a single file.It increase the speed of the webpage.<br>

Let's Create an external javascript<br>

message.js<br>
function msg(){ <br>
    alert("Hello javascript");<br>
}<br>

Let's include the javascript file into html page. It calls the Javascript function on click button.<br>

index.html<br>
<html>
<head>
<script type="text/javascript"STC="message.js>

</script>
</head>
<body>
<p> Welcome to javascript</p><br>
<form>
<input type="button"value="click"onclick=msg()"/>
</form>
</body>

</html>


# Advantages of External Javascript
1. It separates HTML and code.<br>
2.It makes HTML and JavaScript easier to read and maintain.<br>
3.It allows easy code readability.<br>
4.The length of the code reduces as only we need to specify the location of the js file.<br>
5.Page loads speed up due to Cached JavaScript files.<br>

# Disadvantage of External Javascript
1.Coders can easily download your code using the url of the script(.js) file.<br>
2.An extra HTTP request is made by the browser to get this JavaScript code.<br>
3. The two js file are dependent on one another,then a failure in one file may affect the execution of the other dependent file.<br>

# Javascript Comment
The Javascript comments are meaningful way to deliver message .It is used to add information about the code, Warning or suggestion. So that end user can easily interpret the code.<br>
The javascript comment is ignored by the javascript engine i.e embedded in the browser.<br>
<b> Advantage of Javascript comments</b>
The are mainly two advantages of JS comments.<br>
1. To make code easy to understand.
2. To avoid the unnecessary code

<b>Types of javascript comments</b><br>
1. Single-Line comment
2. Multi-line comment

<b>JavaScript Single Line comment</b><br>
It is represented by double forward slashes(//)<br>
It can be used before and after the statement.<br>
<script>
    // It is single line comment
    document.Write("hello javascript");<br>
</script>

<b>Javascript Multi line comment</b>
It can be used to add single as well as multi line comments. So, it is more convenient.<br>
/*Your code is here */



