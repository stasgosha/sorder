<?php
	if (!isset($page_title)) {
		$page_title = 'Page Title';
	}

	if (!isset($direction)) {
		$direction = 'ltr';
	}
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title><?= $page_title ?> | SOrder</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/slick.min.css">
	<link rel="stylesheet" href="css/slick-theme.min.css">
	<link rel="stylesheet" href="css/main.css?v=3">
</head>
<body class="<?= $direction ?>" dir="<?= $direction ?>">
	<div class="wrapper push">
		<div class="page">
			<header class="header">
				<div class="container">
					<div class="header-inner">
						<div class="header-block">
							<a href="index.php" class="logo-block">
								<img src="img/logo.svg" alt="SOrder">
							</a>
						</div>
						<div class="header-block d-lg-none">
							<div class="menu-opener">
								<div class="opener">
									<div class="bar"></div>
									<div class="bar"></div>
									<div class="bar"></div>
								</div>
							</div>
						</div>
						<div class="header-block d-none d-lg-block">
							<nav>
								<ul class="top-nav">
									<li><a href="index.php">For Guests</a></li>
									<li><a href="for-restaurants.php">For Restaurants</a></li>
									<li><a href="#">For Hotels</a></li>
									<li><a href="pricing.php">Pricing</a></li>
									<li><a href="#">Contacts</a></li>
								</ul>
							</nav>
						</div>
						<div class="header-block d-none d-lg-block">
							<div class="language-select dropdown">
								<div class="opener dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" id="language-select" role="button">
									<span>English</span>
								</div>
								<div class="dropdown-menu" aria-labelledby="language-select">
									<ul>
										<li class="current"><a href="#">English</a></li>
										<li><a href="#">Russian</a></li>
										<li><a href="#">Hebrew</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>