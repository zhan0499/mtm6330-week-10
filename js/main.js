$(document).ready(function ($) {
  /*
  Basic Selectors
  .css method changes the styling of the method
  */
  $('p').css('border-bottom', '1px solid black')
  $('.first').css('border-color', 'red')
  $('#special').css('background-color', '#d2d2d2')
  $('p.first small').css('background-color', 'lightgrey')

  /*
  Content - text, HTML, and inputs
  */

  // change text of first paragraph
  // $('.first').text('Lets learn jQuery')

  // Will italicize the html
  $('.first').html('Lets learn <em>jQuery</em>')
  $('.first').prepend('<h2>Welcome</h2>')
  $('.first').after('<small>Make webpages interactive</small>')
  $('#yourName').val('Bob Burger')

  /* Attribute Sslector */
  $('a[href="#1"]').css('background-color', 'tomato')
  $('a[href^="#"]').css('color', 'grey')
  // * will find any link with google
  $('a[href*="google"]').css('font-weight', 'bold')

  /* Animation function */

  // $('.card:first').hide(400)
  // $('.card:first').delay(1000).hide(400).show(800, function(){alert('We\'re back at it') })
  $('.card').animate({ borderRadius: '20px' }, 800)

  // attr can pass 2 arguments: src, and 2nd arguments sets the attribute
  $('img:first').attr('src', './img/image-5.jpg')

  /* Class method */

  // hasclass checks if item has a specfic class, will output True or False
  // console.log($('img:last').hasClass('special'))

  // reference
  // $('img').addClass('special')
  $('img').toggleClass('special')

  /* Events */
  // do something on click
  $('img').click(function () {
    console.log($(this).attr('src', './img/image-4.jpg'))
    $(this).toggleClass('special')
  })

  // AJAX
  $('#content').load('./about.html')
  // $('#contentNav .nav-link').click(function (e) {
  //   e.preventDefault()
  //   var page = $(this).attr('href')
  //   // console.log(page)
  //   $('#content').load(page)
  // })

  // Remove class 'active' and add class to new navigation tab, changes nav to black.
  $('#contentNav .nav-link').click(function (e) {
    e.preventDefault()
    var page = $(this).attr('href')
    $('.active').removeClass('active')
    $(this).addClass('active')
    // console.log(page)

    $('#content').fadeOut(500, function () {
      $('#content').load(page)
    }).fadeIn(500)
  })

  /* Using local JSON file with AJAX */
  $.ajax({
    url: 'data/posts.json',
    type: 'GET',
    dataType: 'json'
  }).done(function (data) {
    // var posts = JSON.parse(data)
    console.log(data)
    var numPosts = data.posts.length
    for (var i = 0; i < numPosts; i++) {
      var post = '<div class="col-sm-6 p-5"><h3>'
      post += (i + 1) + '.' + data.posts[i].title
      post += '</h3><p>'
      post += data.posts[i].body
      post += '</p></div>'
      $('#posts').append(post)
    }
  })
})
