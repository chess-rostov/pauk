    function sites(){
          var p = new Ping();

          // Using callback
          p.ping("https://github.com", function(err, data) {
          // Also display error if err is returned.
          if (err) {
              console.log("error loading resource")
              data = data + " " + err;
          }
          document.getElementById("ping-github").innerHTML = data;
          });

          // You may use Promise if the browser supports ES6
          p.ping("https://github.com")
          .then(data => {
              console.log("Successful ping github.com: " + data);
          })
          .catch(data => {
              console.error("Ping failed: " + data);
          })
    
          var m = new Ping();

          // Using callback
          m.ping("https://mail.ru", function(err, data) {
          // Also display error if err is returned.
          if (err) {
              console.log("error loading resource")
              data = data + " " + err;
          }
          document.getElementById("ping-mail").innerHTML = data;
          });

          // You may use Promise if the browser supports ES6
          m.ping("https://mail.ru")
          .then(data => {
              console.log("Successful ping mail.ru: " + data);
          })
          .catch(data => {
              console.error("Ping failed: " + data);
          });
    
          var a = new Ping();
          var data=''
          // Using callback
          a.ping("https://a.ru", function(err, data) {
          // Also display error if err is returned.
          if (err) {
              console.log("error loading resource")
              data = data + " " + err;
          }
          document.getElementById("ping-a").innerHTML = data;
          });

          // You may use Promise if the browser supports ES6
          a.ping("https://a.ru")
          .then(data => {
              console.log("Successful ping a.ru: " + data);
          })
          .catch(data => {
              console.error("Ping failed: " + data);
          });
    }
