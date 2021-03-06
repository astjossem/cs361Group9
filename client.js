<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
		html, body {
		    margin: 0;
		    height: 100%;
		    width: 100%;
		}
		.PostList{
			margin: auto;
			width: 50%;
			height: 100%;
			border: 1px solid gray;
		}
		#createPost{
			margin: auto;
			padding: 5px;
			width: 400px;
			border: 4px solid gray;	
			background-color: #f2f2f2;		
		}	
		fieldset {
			margin-left: 2%;
			margin-right: 2%;
			border: 2px solid gray;
		}
		.Post{
			margin: auto;
			border: 3px solid gray;
			background-color: white;
		}	
		.FakePost{
			background-color: #ffcccc;
			border: 3px solid gray;
		}
		.PostText{
			border: 1px solid gray;
		}
		a, span {
			margin-left: 10px;
			margin-right: 10px;
		}

	</style>
</head>
<body onload="OnPageLoad()">
<div class="PostList">
	<!--<form id="createPost" action="/" method="post"> -->
	<form id="createPost">	
		<fieldset>
			<legend>Create Post</legend>
			User Name: <input type="text" id="userInput" name="userName" value="Name" required><br>
			Date of Entry: <input type="date" id="dateInput" name="dateOfEntry" value="2018-08-01"required><br>
			Text<br><textarea  id="msgInput" name="message" style="width:350px;height:150px;" required>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo	consequat. 
			</textarea><br>
			Image: <input type="file" id="imageInput" name="image" maxlength="50" allow="text/*"><br>
			Link: <input type="text" id="linkInput" value="http://www.google.com" name="link"><br>
			Privacy Setting: <select id="privInput" name="privacy" required>
					<option disabled selected value>--Select Privacy--</option>
					<option value="public">Public</option>
					<option value="private">Private</option>
					<option value="custom1">Custom Setting 1</option>
					<option value="custom2">Custome Setting 2</option>
			      </select><br>
			<input type="radio" value="notFake" name="isFake" checked>Not Fake 
			<input type="radio" id="fakeInput" value="fake" name="isFake">Fake<br>
			<input id="submitInput" type="button" value="Submit" style="display:block;margin:auto;">
		</fieldset>
	</form><br>
</div>
</body>
<script src="post.js"></script>
</html>


