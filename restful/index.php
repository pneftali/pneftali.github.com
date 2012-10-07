<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel='stylesheet' href='./css/bootstrap.css' type='text/css' media='all' />
<script type='text/javascript' src='http://code.jquery.com/jquery-1.8.2.min.js'></script>
<script type='text/javascript' src='./js/bootstrap.min.js'></script>
<?php if( isset($_POST['password']) ) : ?>
<script>
	var pass = <?php echo '"'.$_POST['password'].'"'; ?>;
</script>
<?php endif; ?>
</head>

<body>
  <div class="container">
    
  	<div class="row">

	  <form method="POST" action="/" class="form-horizontal">
	    <div class="span6">
	    	<legend>Registration</legend>
	      	<fieldset>		      	
		      	<div class="control-group">
		        	<label class="control-label" for="input01">Fullname</label>
		        	<div class="controls">
		          		<input type="text" class="input-xlarge" id="input01" required placeHolder="John Doe">
		        	</div>
		      	</div>
	      	</fieldset>
	      	<fieldset>
		      	<div class="control-group">
		        	<label class="control-label" for="input02">Username</label>
		        	<div class="controls">
		          		<input type="text" class="input-xlarge" id="input02" required placeHolder="jdoe">
		        	</div>
		      	</div>
	      	</fieldset>
	      	<fieldset>
		      	<div class="control-group">
		        	<label class="control-label" for="input03">Email</label>
		        	<div class="controls">
		          		<input type="email" class="input-xlarge" id="input03" required placeHolder="john.doe@gmail.com">
		        	</div>
		      	</div>
	      	</fieldset>
	      	<fieldset>
		      	<div class="control-group">
		        	<label class="control-label" for="input04">Password</label>
		        	<div class="controls">
		          		<input type="password" class="input-xlarge" id="input04" required placeHolder="">
		        	</div>
		      	</div>
	      	</fieldset>

	      	<legend>Registration</legend>
	      	<fieldset>
		      	<div class="control-group">
		        	<label class="control-label" for="input05">Group</label>
		        	<div class="controls">
		          		<select class="" id="input05" required>
		          			<option>Board of Director</option>
		          			<option>Manager</option>
		          		</select>	
		        	</div>
		      	</div>
	      	</fieldset>
	      	<fieldset>
		      	<div class="control-group">
		        	<label class="control-label" for="input06">Region</label>
		        	<div class="controls">
		          		<select class="" id="input06" required>
		          			<option>Dipolog</option>
		          			<option>Davao</option>
		          			<option>Cebu</option>
		          		</select>	
		        	</div>
		      	</div>
	      	</fieldset>

	      	<input type='submit' id='reg-btn' value='Register' class="btn btn-large btn-primary pull-right" />
	    </div>	    
	  </form>


	  	<!-- modal for secretary -->
	  	<div class="modal" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  			<div class="modal-header">
	    		<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
	    		<h3 id="myModalLabel">Choose your Pokemon</h3>
  			</div>
  			<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method='POST' id="contact-form" class="form-horizontal" style='margin:0;'>
  			<div class="modal-body">   				
  				<fieldset>	
	  				<div class="control-group">
	      				<label class="control-label" for="wdname">Water District</label>
	      				<div class="controls">
	        				<select id='wdname' name='wdname' required>
								<option value="">Please select</option>
								<option value="dipolog">Dipolog</option>
								<option value="surigao">Surigao</option>
							</select>
	      				</div>
	    			</div>	
	    			<div class="control-group">
	      				<label class="control-label" for="passwod">Password</label>
	      				<div class="controls">
	        				<input type='password' id='password' name='password' required />								
	      				</div>
	    			</div>	
    			</fieldset>	    			
  			</div>
  			<div class="modal-footer">
    			<button class="btn" data-dismiss="modal" aria-hidden="true">Cancel</button>
    			<input type='submit' id='reg-btn' value='Continue' class="btn btn-primary" />
  			</div>
  			</form>				
		</div>

	</div>

  </div>
</body>

<script type='text/javascript' src='./js/app.js'></script>
<script type="text/javascript">

  // ref: http://diveintohtml5.org/detect.html
  function supports_input_placeholder()
  {
    var i = document.createElement('input');
    return 'placeholder' in i;
  }

  if(!supports_input_placeholder()) {
    var fields = document.getElementsByTagName('INPUT');
    for(var i=0; i < fields.length; i++) {
      if(fields[i].hasAttribute('placeholder')) {
        fields[i].defaultValue = fields[i].getAttribute('placeholder');
        fields[i].onfocus = function() { if(this.value == this.defaultValue) this.value = ''; }
        fields[i].onblur = function() { if(this.value == '') this.value = this.defaultValue; }
      }
    }
  }

</script>
</html>