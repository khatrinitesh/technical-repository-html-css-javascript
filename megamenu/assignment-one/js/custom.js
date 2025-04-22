$(document).ready(function () {
  $(function () {
    $(".btnCategory").hover(
      function () {
          // Show the dropdown menu by adding a class
          $(".shopCategoryDropdownMenu").stop(true, true).fadeIn(200);
          $('.shopCategoryDropdownMenu').addClass('shopCategoryDropdownMenuActive')
          $(".btnCategory").addClass('shopCategoryDropdownMenuActive');
      },
      function () {
          // Hide the dropdown menu by removing the class
          $(".shopCategoryDropdownMenu").stop(true, true).fadeOut(200);
          $('.shopCategoryDropdownMenu').removeClass('shopCategoryDropdownMenuActive')
          $(".btnCategory").removeClass('shopCategoryDropdownMenuActive');
      }
  );

  $(".shopCategoryDropdownMenu").hover(
      function () {
          // Keep the menu visible when hovering inside the menu
          $(".shopCategoryDropdownMenu").stop(true, true).fadeIn(200);
          $('.shopCategoryDropdownMenu').addClass('shopCategoryDropdownMenuActive')
      },
      function () {
          // Hide the menu when mouse leaves the menu
          $(".shopCategoryDropdownMenu").stop(true, true).fadeOut(200);
          $('.shopCategoryDropdownMenu').removeClass('shopCategoryDropdownMenuActive')
      }
  );

    $(".mega-menu,.mini-mega-menu").hide();

    $(".nav > li").hover(
      function () {
        $(this)
          .children(".mega-menu, .dropdown, .mini-mega-menu")
          .stop(true, true)
          .slideDown(200);
      },
      function () {
        $(this)
          .children(".mega-menu, .dropdown, .mini-mega-menu")
          .stop(true, true)
          .slideUp(200);
      }
    );

    $(".category-item").hover(function () {
      var target = $(this).data("target");
      $(".category-item").removeClass("active");
      $(this).addClass("active");
      $(".submenu-panel").removeClass("active");
      $("#" + target).addClass("active");
    });

    $(".nav > li > a").on("click", function (e) {
      const $submenu = $(this).siblings(
        ".mega-menu, .dropdown, .mini-mega-menu"
      );
      if ($submenu.length) {
        e.preventDefault();
        $(".mega-menu, .dropdown, .mini-mega-menu").not($submenu).slideUp(200);
        $submenu.stop(true, true).slideToggle(200);
      }
    });


    $(document).on("click", function (e) {
      if (!$(e.target).closest(".nav > li").length) {
        $(".mega-menu, .dropdown, .mini-mega-menu").slideUp(200);
      }
    });
  });
});
