//Backend
app.get('/api/v1/login/', (req, res) => {
  User.find(u => u.email == req.data.email, (err, user) => {
    if (err) {
      return res.data({
          errorabc: "COuldn not find email"
      });
    }
    res.responseCode = 200;
    return res;
  });
});


// FrontEnd;

<div id="emailIDField"></div>
<div id="passIDField"></div>
<div id="errorMsg" class="error" style="opacity: 0">Please check and try again.</div>

<button id="btnLogin" onclick="loginBtnClick"></button>

function loginBtnClick() {
    var email = $("#emailIDField"); //JQUERY
    var pass = $("#passIDField");
    var 

    ajax.get("/api/v1/login/", {
        data: {
            email: email,
            pass: pass
        },
        success: (resp) => {
            if (resp.responseCode == 200)
                // Set cookie
                location.href = "/home";
            else
                showError("Login Failed");
        },
        failure: (err) => {
            showError(err.errorabc);
        }
    });
}

function showError (msg) {
    $("#errorMsg").innerHTML("Failed becuase: " + msg).css("opacity: 1");
}
