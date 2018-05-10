 $(document).ready(function() {

             $(".question a").click(function() {
                 $(this).toggleClass("active_qa");
             });

             $("#dead").click(function() {
                     $("#dead").html("<img src='http://res.cloudinary.com/dxssokt4h/image/upload/v1507184409/dead-active_gcseca.png'>");
                     $("#sad").html("<img src='http://res.cloudinary.com/dxssokt4h/image/upload/v1507184410/sad_il7kmb.png'>");
                     $("#sceptic").html("<img src='http://res.cloudinary.com/dxssokt4h/image/upload/v1507184410/sceptic_we1bxv.png'>");
                     $("#happy").html("<img src='http://res.cloudinary.com/dxssokt4h/image/upload/v1507184409/more-happy_f53bgi.png'>");
                     $("#more-happy").html("<img src='http://res.cloudinary.com/dxssokt4h/image/upload/v1507184409/happy_kakekm.png'>");
                 });

                 $("#sad").click(function() {
                     $("#sad").html("<img src='http://res.cloudinary.com/dxssokt4h/image/upload/v1507184410/sad-active_rhibzn.png'>");
                     $("#dead").html("<img src='http://res.cloudinary.com/dxssokt4h/image/upload/v1507184410/dead_tminl7.png'>");
                     $("#sceptic").html("<img src='http://res.cloudinary.com/dxssokt4h/image/upload/v1507184410/sceptic_we1bxv.png'>");
                     $("#happy").html("<img src='http://res.cloudinary.com/dxssokt4h/image/upload/v1507184409/more-happy_f53bgi.png'>");
                     $("#more-happy").html("<img src='http://res.cloudinary.com/dxssokt4h/image/upload/v1507184409/happy_kakekm.png'>");
                 });

                 $("#sceptic").click(function() {
                     $("#sceptic").html("<img src='http://res.cloudinary.com/dxssokt4h/image/upload/v1507184410/sceptic-active_kez7sa.png'>");
                     $("#dead").html("<img src='http://res.cloudinary.com/dxssokt4h/image/upload/v1507184410/dead_tminl7.png'>");
                     $("#sad").html("<img src='http://res.cloudinary.com/dxssokt4h/image/upload/v1507184410/sad_il7kmb.png'>");
                     $("#happy").html("<img src='http://res.cloudinary.com/dxssokt4h/image/upload/v1507184409/more-happy_f53bgi.png'>");
                     $("#more-happy").html("<img src='http://res.cloudinary.com/dxssokt4h/image/upload/v1507184409/happy_kakekm.png'>");
                 });

                 $("#happy").click(function() {
                     $("#happy").html("<img src='http://res.cloudinary.com/dxssokt4h/image/upload/v1507184409/more-happy-active_d2hget.png'>");
                     $("#dead").html("<img src='http://res.cloudinary.com/dxssokt4h/image/upload/v1507184410/dead_tminl7.png'>");
                     $("#sad").html("<img src='http://res.cloudinary.com/dxssokt4h/image/upload/v1507184410/sad_il7kmb.png'>");
                     $("#sceptic").html("<img src='http://res.cloudinary.com/dxssokt4h/image/upload/v1507184410/sceptic_we1bxv.png'>");
                     $("#more-happy").html("<img src='http://res.cloudinary.com/dxssokt4h/image/upload/v1507184409/happy_kakekm.png'>");
                 });

                 $("#more-happy").click(function() {
                     $("#more-happy").html("<img src='http://res.cloudinary.com/dxssokt4h/image/upload/v1507184409/happy-active_fs6ztw.png'>");
                     $("#dead").html("<img src='http://res.cloudinary.com/dxssokt4h/image/upload/v1507184410/dead_tminl7.png'>");
                     $("#sad").html("<img src='http://res.cloudinary.com/dxssokt4h/image/upload/v1507184410/sad_il7kmb.png'>");
                     $("#sceptic").html("<img src='http://res.cloudinary.com/dxssokt4h/image/upload/v1507184410/sceptic_we1bxv.png'>");
                     $("#happy").html("<img src='http://res.cloudinary.com/dxssokt4h/image/upload/v1507184409/more-happy_f53bgi.png'>");


                 });
             });