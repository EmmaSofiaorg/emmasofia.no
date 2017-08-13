<template lang="html">

  <header class="header">
	<div class="header__wrapper">
		<div class="header__logo">
			<a>
        <logo height="30" />
      </a>
		</div>

		<nav class="header__nav --desktop">
			<ul class="header__nav-links">
        <li class="header__nav-link">
          <a>Stories</a>
        </li>
				<li class="header__nav-link">
					<a>About the project</a>
				</li>
				<li class="header__nav-link">
					<button class="button --small">Join the movement</button>
				</li>
			</ul>
		</nav>

		<nav class="header__nav --mobile">
			<div>Meny ☰</div>
			<div class="overlay-menu --hidden">

				<div class="overlay-menu__top">
					<div>Lukk X</div>
				</div>

				<div class="overlay-menu__contents">
					<nav class="overlay-menu__nav">
						<ul class="overlay-menu__nav-links">
              <li class="overlay-menu__nav-link">
                <h2>Stories</h2>
              </li>
							<li class="overlay-menu__nav-link">
								<h2>About the project</h2>
							</li>
							<li class="overlay-menu__nav-link">
								<button class="button --white --large">Join the movement</button>
							</li>
						</ul>
					</nav>
				</div>

			</div>
		</nav>

	</div>
</header>

</template>

<script>

import logo from '@/assets/logo';

export default {
  components: { logo },
}

</script>
