<?php $page_title = 'FAQ' ?>
<?php include('header.php') ?>
	<div class="page-main-content">
		<section class="faq-section section-default-paddings">
			<div class="container">
				<div class="section-caption">
					<h2 class="sor-h2 caption">Price-List</h2>
					<p class="sor-body-1 subcaption">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi aut maxime aliquam, nobis pariatur omnis officiis, non rem harum quia eligendi.</p>
				</div>
				<div class="prices-slider prices-list">
					<div class="slide list-item">
						<div class="prices-card selected" data-radio="Basic" data-target="#pricesVal">
							<div class="card-header">
								<div class="card-caption">Basic</div>
								<div class="card-price">€49</div>
							</div>
							<div class="card-content">
								<ul class="properties-list">
									<li>First Description</li>
									<li>Second Description</li>
									<li>Third Description</li>
									<li>Fourth Description</li>
									<li>Fifth Description</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="slide list-item">
						<div class="prices-card" data-radio="Gold" data-target="#pricesVal">
							<div class="card-header">
								<div class="card-caption">Gold</div>
								<div class="card-price">€99</div>
							</div>
							<div class="card-content">
								<ul class="properties-list">
									<li>First Description</li>
									<li>Second Description</li>
									<li>Third Description</li>
									<li>Fourth Description</li>
									<li>Fifth Description</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="slide list-item">
						<div class="prices-card" data-radio="Business" data-target="#pricesVal">
							<div class="card-header">
								<div class="card-caption">Business</div>
								<div class="card-price">€149</div>
							</div>
							<div class="card-content">
								<ul class="properties-list">
									<li>First Description</li>
									<li>Second Description</li>
									<li>Third Description</li>
									<li>Fourth Description</li>
									<li>Fifth Description</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<form action="#" class="form prices-form">
					<input type="text" name="selectedPlan" id="pricesVal" class="d-none">
					<div class="form-error"></div>
					<a href="#" class="btn btn-big">Submit</a>
				</form>
			</div>
		</section>
	</div>
<?php include('footer.php') ?>