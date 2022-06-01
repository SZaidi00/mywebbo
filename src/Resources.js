import React from 'react'

export default function Resources() {
  return (
    <><h1>Responsive grid of cards/tiles</h1><section class="Resource-main">

          <article class="Resource-tile">
              <a href="#" target="_blank" class="Resource-tile-anchor">

                  <div class="Resource-tile-media">
                      <span class="Resource-tile-time">60 min read</span>
                      {/* <img class="Resource-tile-img" src="https://picsum.photos/720/540/?image=50"> */}
                      </div>

                  <div class="Resource-tile-content">
                      <h2 class="Resource-tile-title">I am a resource item</h2>

                      <div class="Resource-tile-intro">
                          <p>Choosing the performance management system that’s right for you is never easy, particularly when it comes to driving adoption.</p>
                      </div>
                  </div>
              </a>

              <ul class="Resource-tile-tags">
                  <li class="Resource-tile-tag"><a href="#" class="Resource-tag-anchor">E-Book</a></li>
                  <li class="Resource-tile-tag"><a href="#" class="Resource-tag-anchor">Employee feedback</a></li>
              </ul>
          </article>

          <article class="Resource-tile ">
              <a href="#" target="_self" class="Resource-tile-anchor">

                  <div class="Resource-tile-content">
                      <h2 class="Resource-tile-title">Blog entry white background</h2>

                      <div class="Resource-tile-intro">
                          <div class="section-inner sectionLayout--insetColumn">
                              <p class="graf graf--p graf-after--figure">There is of course, no ‘sure thing’ in business. It’s all a gamble, so raise the damn stakes. Stop playing the fixed odd slot machines in the lobby when you can don your tux or slip on your cocktail dress and play for real stakes in the high
                                  roller’s room. The tux, the dress, is</p>
                          </div>
                          <div class="section-inner sectionLayout--outsetColumn">
                              <figure class="graf graf--figure graf--layoutOutsetCenter graf-after--p">
                                  <div class="aspectRatioPlaceholder is-locked"></div>
                              </figure>
                          </div>
                      </div>
                  </div>
              </a>

              <ul class="Resource-tile-tags">
                  <li class="Resource-tile-tag"><a href="#" class="Resource-tag-anchor">Blog</a></li>
              </ul>
          </article>

          <article class="Resource-tile">
              <a href="#" target="" class="Resource-tile-anchor">

                  <div class="Resource-tile-media">
                      <span class="Resource-tile-time">10 min read</span>
                      {/* <img class="Resource-tile-img" src="https://picsum.photos/720/540/?image=90" /> */}
                  </div>

                  <div class="Resource-tile-content">
                      <h2 class="Resource-tile-title">Guide entry</h2>

                      <div class="Resource-tile-intro">
                          <p>To establishing a new model rather than slavishly serving a legacy. Is its’ demise necessary for us to truly take an evolutionary leap? “<em>Dear John, it’s not me, it’s you…”</em></p>
                      </div>
                  </div>
              </a>

              <ul class="Resource-tile-tags">
                  <li class="Resource-tile-tag"><a href="#" class="Resource-tag-anchor">Guide</a></li>
                  <li class="Resource-tile-tag"><a href="#" class="Resource-tag-anchor">Performance management</a></li>
                  <li class="Resource-tile-tag"><a href="#" class="Resource-tag-anchor">Employee feedback</a></li>
                  <li class="Resource-tile-tag"><a href="#" class="Resource-tag-anchor">Another topic</a></li>
                  <li class="Resource-tile-tag"><a href="#" class="Resource-tag-anchor">Pants</a></li>
              </ul>
          </article>

          <article class="Resource-tile">
              <a href="#" target="" class="Resource-tile-anchor">

                  <div class="Resource-tile-media">

                      {/* <img class="Resource-tile-img" src="https://picsum.photos/720/540/?image=10" /> */}
                  </div>

                  <div class="Resource-tile-content">
                      <h2 class="Resource-tile-title">Is Being Best Enough?</h2>

                      <div class="Resource-tile-intro">
                          <p>In <em>State</em>, I offered the simple logic that there are more great projects than there are great teams, so studios that deliver to the highest standards will thrive.</p>
                      </div>
                  </div>
              </a>

              <ul class="Resource-tile-tags">
                  <li class="Resource-tile-tag"><a href="#" class="Resource-tag-anchor">Webinar</a></li>
                  <li class="Resource-tile-tag"><a href="#" class="Resource-tag-anchor">Pants</a></li>
              </ul>
          </article>

          <article class="Resource-tile">
              <a href="#" target="_self" class="Resource-tile-anchor">

                  <div class="Resource-tile-content">
                      <h2 class="Resource-tile-title">Changing The Terms Of Business</h2>

                      <div class="Resource-tile-intro">
                          <p>It all begs the question, should the existing agency model just die and break so that we can properly put our minds to establishing a new model rather than slavishly serving a legacy.</p>
                      </div>
                  </div>
              </a>

              <ul class="Resource-tile-tags">
                  <li class="Resource-tile-tag"><a href="#" class="Resource-tag-anchor">Blog</a></li>
                  <li class="Resource-tile-tag"><a href="#" class="Resource-tag-anchor">Employee feedback</a></li>
                  <li class="Resource-tile-tag"><a href="#" class="Resource-tag-anchor">Pants</a></li>
              </ul>
          </article>
      </section></>
  )
}
