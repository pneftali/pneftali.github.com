<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel='stylesheet' href='./css/bootstrap.min.css' type='text/css' media='all' />
<link rel='stylesheet' href='./css/bootstrap-responsive.min.css' type='text/css' media='all' />
<style>
	a.add-more { font-size: 14px; color: #222; }
	a.add-more:hover { cursor: pointer; color: #000; }
	label { font-size: 12px; }

	.inline { display: inline; }
	.v-top { vertical-align: top !important; }

	.bb-bot { margin-top: 20px; }


	.navbar-inverse .navbar-inner {	
		background-color: #0C8BEE;
		background-image: -moz-linear-gradient(top,#222,#111);
		background-image: -webkit-gradient(linear,0 0,0 100%,from(#222),to(#111));
		background-image: -webkit-linear-gradient(top,#0741D6,#1D75AF);
		background-image: -o-linear-gradient(top,#222,#111);
		background-image: linear-gradient(to bottom,#222,#111);
		background-repeat: repeat-x;
		border-color: #0C8BEE;
		filter: progid:dximagetransform.microsoft.gradient(startColorstr='#ff222222',endColorstr='#ff111111',GradientType=0);
	}
</style>
<script type='text/javascript' src='http://code.jquery.com/jquery-1.8.2.min.js'></script>
<script type='text/javascript' src='./js/bootstrap.min.js'></script>
<?php if( isset($_POST['password']) ) : ?>
<script>
	var pass = <?php echo '"'.$_POST['password'].'"'; ?>;
</script>
<?php endif; ?>
</head>

<body>

	<div class="navbar navbar-inverse navbar-fixed-top">
      	<div class="navbar-inner">
        	<div class="container">
          		<a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
		            <span class="icon-bar"></span>
		            <span class="icon-bar"></span>
		            <span class="icon-bar"></span>
          		</a>
          		<a class="brand" href="#">PAWD Secretary</a>          		
        	</div>
      </div>
    </div>
  	<div class="container" style="margin:100px auto;">
    
  	<div class="row">
	  	<form class="form-horizontal">	    
	    	<legend>Water District</legend>
	    	<div class="span6">
		      	<fieldset>		      	
			      	<div class="control-group">
			        	<label class="control-label" for="wd-1">Name</label>
			        	<div class="controls">
			          		<input type="text" class="input-xlarge" id="wd-1" name='wd-name' required placeHolder="John Doe">
			        	</div>
			      	</div>
		      	</fieldset>
		      	<fieldset>
			      	<div class="control-group">
			        	<label class="control-label" for="wd-2">Address</label>
			        	<div class="controls">
			          		<input type="text" class="input-xlarge" id="wd-2" name='wd-address' required placeHolder="jdoe">
			        	</div>
			      	</div>
		      	</fieldset>
		      	<fieldset>
			      	<div class="control-group">
			        	<label class="control-label" for="wd-3">Zip Code</label>
			        	<div class="controls">
			          		<input type="text" class="input-xlarge" id="wd-3" name='wd-zip' required placeHolder="">
			        	</div>
			      	</div>
		      	</fieldset>
		      	<fieldset>
			      	<div class="control-group">
			        	<label class="control-label" for="wd-4">Email</label>
			        	<div class="controls">
			          		<input type="email" class="input-xlarge" id="wd-4" name='wd-email' required placeHolder="">
			        	</div>
			      	</div>
		      	</fieldset>
		      	<fieldset>
			      	<div class="control-group">
			        	<label class="control-label" for="wd-5">Mobile</label>
			        	<div class="controls">
			          		<input type="text" class="input-xlarge" id="wd-5" name='wd-mobile' required placeHolder="">
			        	</div>
			      	</div>
		      	</fieldset>
		      	<fieldset>
			      	<div class="control-group">
			        	<label class="control-label" for="wd-6">Fax Number</label>
			        	<div class="controls">
			          		<input type="text" class="input-xlarge" id="wd-6" name='wd-fax' required placeHolder="">
			        	</div>
			      	</div>
		      	</fieldset>
	      	</div>
	      	<div class="span6">
		      	<fieldset>
			      	<div class="control-group">
			        	<label class="control-label" for="wd-7">CCC Number</label>
			        	<div class="controls">
			          		<input type="text" class="input-xlarge" id="wd-7" name='wd-ccc' required placeHolder="">
			        	</div>
			      	</div>
		      	</fieldset>
		      	<fieldset>
			      	<div class="control-group">
			        	<label class="control-label" for="wd-8">CCC Date of Issue</label>
			        	<div class="controls">
			          		<input type="text" class="input-xlarge" id="wd-8" name='wd-doi' required placeHolder="">
			        	</div>
			      	</div>
		      	</fieldset>	      	
		      	<fieldset>
			      	<div class="control-group">
			        	<label class="control-label" for="wd-9">LWUA Area</label>
			        	<div class="controls">
			          		<select class="" id="wd-9" name='wd-area' required>
			          			<option value="">Please select</option>		          			
			          		</select>	
			        	</div>
			      	</div>
		      	</fieldset>
		      	<fieldset>
			      	<div class="control-group">
			        	<label class="control-label" for="wd-10">Category</label>
			        	<div class="controls">
			          		<select class="" id="wd-10" name='wd-category' required>
			          			<option value="">Please select</option>		          			
			          		</select>	
			        	</div>
			      	</div>
		      	</fieldset>
		      	<fieldset>
			      	<div class="control-group">
			        	<label class="control-label" for="wd-11">No. Service Connections</label>
			        	<div class="controls">
			          		<input type="text" class="input-xlarge" id="wd-11" name='wd-asc' required placeHolder="">
			        	</div>
			      	</div>
		      	</fieldset>
		      	<fieldset>
			      	<div class="control-group">
			        	<label class="control-label" for="wd-12">City/Municipality</label>
			        	<div class="controls">
			          		<input type="text" class="input-xlarge" id="wd-12" name='wd-cm' required placeHolder="">
			        	</div>
			      	</div>
		      	</fieldset>
	      	</div>
	      	

	      	<legend>General Manager</legend>
	      	<div class="span6">
		      	<fieldset>
			      	<div class="control-group">
			        	<label class="control-label" for="gm-1">Name</label>
			        	<div class="controls">
			          		<input type="text" class="input-xlarge" id="gm-1" name='gm-name' required placeHolder="">
			        	</div>
			      	</div>
		      	</fieldset>
		      	<fieldset>
			      	<div class="control-group">
			        	<label class="control-label" for="gm-2">Date of Appointment</label>
			        	<div class="controls">
			          		<input type="text" class="input-xlarge" id="gm-2" name='gm-doa' required placeHolder="">
			        	</div>
			      	</div>
		      	</fieldset>
		      	<fieldset>
			      	<div class="control-group">
			        	<label class="control-label" for="gm-3">Profession</label>
			        	<div class="controls">
			          		<input type="text" class="input-xlarge" id="gm-3" name='gm-profession' required placeHolder="">
			        	</div>
			      	</div>
		      	</fieldset>
		      	<fieldset>
			      	<div class="control-group">
			        	<label class="control-label" for="gm-4">Date of Birth</label>
			        	<div class="controls">
			          		<input type="text" class="input-xlarge" id="gm-4" name='gm-dob' required placeHolder="">
			        	</div>
			      	</div>
		      	</fieldset>
		    </div>
		    <div class="span6">  	
		      	<fieldset>
			      	<div class="control-group">
			        	<label class="control-label">Gender</label>
			        	<div class="controls">
			        		<label class="radio inline">
								<input type="radio" name="gm-gender" value='male' />
								Male							  
							</label>
							<label class="radio inline">
								<input type="radio" name="gm-gender" value='female' />
								Female							  
							</label>			          		
			        	</div>
			      	</div>
		      	</fieldset>
		      	<fieldset>
			      	<div class="control-group">
			        	<label class="control-label" for="gm-5">Mobile</label>
			        	<div class="controls">
			          		<input type="text" class="input-xlarge" id="gm-5" name='gm-mobile' required placeHolder="">
			        	</div>
			      	</div>
		      	</fieldset>
		      	<fieldset>
			      	<div class="control-group">
			        	<label class="control-label" for="gm-6">Advisor</label>
			        	<div class="controls">
			          		<input type="text" class="input-xlarge" id="gm-6" name='gm-advisor' required placeHolder="">
			        	</div>
			      	</div>
		      	</fieldset>
		      	<fieldset>
			      	<div class="control-group">
			        	<label class="control-label" for="gm-7">Designation</label>
			        	<div class="controls">
			          		<input type="text" class="input-xlarge" id="gm-7" name='gm-designation' required placeHolder="">
			        	</div>
			      	</div>
		      	</fieldset>
		    </div>  	

	      	<legend>
	      		Board of Directors
	      		<a class='add-more pull-right'>
	      			<i class="icon-plus-sign"></i>&nbsp;Add more
	      		</a>
	      	</legend>	      	
	      	<div id='bod-box'>
	      		<div id='clone-this'>
		      		<div class="span6">
				      	<fieldset>
					      	<div class="control-group">
					        	<label class="control-label" for="bb-1-1">Sector</label>
					        	<div class="controls">
					          		<select class="" id="bb-1-1" name='bb-sector' required>
					          			<option>Educational</option>
					          			<option>Professional</option>
					          			<option>Civic-Oriented</option>
					          			<option>Business</option>
					          			<option>Womens</option>
					          			<option>LWUA 6th Member</option>
					          		</select>	
					        	</div>
					      	</div>
				      	</fieldset>
				      	<fieldset>
					      	<div class="control-group">
					        	<label class="control-label" for="bb-1-2">Name</label>
					        	<div class="controls">
					          		<input type="text" class="input-xlarge" id="bb-1-2" name='bb-name' required placeHolder="">
					        	</div>
					      	</div>
				      	</fieldset>
				      	<fieldset>
					      	<div class="control-group">
					        	<label class="control-label" for="bb-1-3">Profession</label>
					        	<div class="controls">
					          		<input type="text" class="input-xlarge" id="bb-1-3" name='bb-profession' required placeHolder="">
					        	</div>
					      	</div>
				      	</fieldset>
				      	<fieldset>
					      	<div class="control-group">
					        	<label class="control-label" for="bb-1-4">Date of Birth</label>
					        	<div class="controls">
					          		<input type="text" class="input-xlarge" id="bb-1-4" name='bb-dob' required placeHolder="">
					        	</div>
					      	</div>
				      	</fieldset>
			      	</div>
			      	<div class="span6">
				      	<fieldset>
					      	<div class="control-group">
					        	<label class="control-label">Gender</label>
					        	<div class="controls">
					        		<label class="radio inline">
										<input type="radio" name="gender" id="g-m" value='male' />
										Male							  
									</label>
									<label class="radio inline">
										<input type="radio" name="gender" id="g-f" value='female' />
										Female							  
									</label>			          		
					        	</div>
					      	</div>
				      	</fieldset>
				      	<fieldset>
					      	<div class="control-group">
					        	<label class="control-label" for="bb-1-5">Date of Appointment</label>
					        	<div class="controls">
					          		<input type="text" class="input-xlarge" id="bb-1-5" name='bb-doa' required placeHolder="">
					        	</div>
					      	</div>
				      	</fieldset>
				      	<fieldset>
					      	<div class="control-group">
					        	<label class="control-label" for="bb-1-6">Start Date</label>
					        	<div class="controls">
					          		<input type="text" class="input-xlarge" id="bb-1-6" name='bb-sdate' required placeHolder="">
					        	</div>
					      	</div>
				      	</fieldset>
				      	<fieldset>
					      	<div class="control-group">
					        	<label class="control-label" for="bb-1-7">End Date</label>
					        	<div class="controls">
					          		<input type="text" class="input-xlarge" id="bb-1-7" name='bb-edate' required placeHolder="">
					        	</div>
					      	</div>
				      	</fieldset>
				    </div>  				      	
			    </div><!-- end clone-this -->

			    <div class='clearfix'></div>
			    <div class='bb-bot' id="bb-bot-1"></div>

			</div>
			<a class='add-more pull-right'>
      			<i class="icon-plus-sign"></i>&nbsp;Add more
      		</a>
      		<div class='clearfix'></div>
			<p class="pull-right" style="margin-top:50px;">
			  	<button class="btn btn-large" type="button"><i class="icon-remove"></i>&nbsp;Cancel</button>
	      		<input type='submit' id='reg-btn' value='Register' class="btn btn-large btn-primary" />
			</p>			
	    	    
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

	</div><!-- end row -->

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