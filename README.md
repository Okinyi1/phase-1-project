# phase-1-project
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Phase 1 Project</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.css"
    />
    <link rel="stylesheet" href="styles.css"/>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
  </head>
  <body>
    <!-- navbar -->
    <div class="heading">
      <div class="item">
        <h2 class="ui header">
          <div class="content">TOP FIVE CAT BREEDS</div>
          <div class="sub header" id="subtitle">SEE CAT BREEDS</div>
        </h2>
      </div>
    </div>

    <div class="ui centered grid">
      <div class="four wide column">
        <div class="list-container">
          <!-- side menu -->
          <ul class="ui divided list" id="breeds">
            <li class="breed item">Cat breeds will appear here</li>
          </ul>
        </div>
      </div>

      <!-- image -->
      <div class="four wide column">
        <img
          id="image"
          src="https://media.istockphoto.com/photos/tabby-cat-holding-blank-sign-picture-id503568727"
          alt="[CAT BREED IMAGE]" 
        />
        REPLACE ME WITH A COMMON BREED
      </div>

      <!-- displaying info -->
      <div class="four wide column">
        <div class="ui cards" id="showing">
          <div class="card">
            <div id="name" class="title">[CAT BREED]</div>
            <div id="origin" class="meta">[ORIGIN]</div>
            <div id="length" class="meta">[LENGTH]</div>
            <div id="min-weight" class="meta">[MIN_WEIGHT]</div>
            <div id="max-weight" class="meta">[MAX_WEIGHT]</div>
            <div id="shedding" class="meta">[SHEDDING]</div>
            <div id="family-friendly" class="meta">[FAMILY-FRIENDLY]</div>
            <div id="children-friendly" class="meta">[CHILDREN-FRIENDLY]</div>
            <div id="playfulness" class="meta">[PLAYFULNESS]</div>
            <div id="health" class="meta">[GENERAL HEALTH]</div>
            <div class="extra content">
              <button id="like-breed" class="ui orange button">
                Like Breed?
              </button>
              <button id="comment" class="ui orange button">
                Comment 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> 
    <script src="index.js"></script>
  </body>
</html>