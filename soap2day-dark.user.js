/* ==UserStyle==
@name           Soap2Day Enhanced Styles
@namespace      USO Archive
@author         Specx
@description    Soap2Day Dark Mode and general style tweaks
@version        20220127.19.11
@license        CC-BY-ND-4.0
@preprocessor   uso
==/UserStyle== */
@-moz-document url-prefix("https://soap2day"),
url-prefix("https://soapgate.org") {

	::-webkit-scrollbar {
		width: 14px;
		height: 14px
	}

	::-webkit-scrollbar-track {
		border-radius: 0
	}

	::-webkit-scrollbar-thumb {
		border-radius: 0;
		background: #dadada !important;
	}

	/* Global */
	body {
		background: #232834!important;
		color: #fff!important
	}

	a {
		color: #9ccfd8!important
	}

	a:hover {
		color: #9ccfd8!important
	}

	.panel {
		background: 0 0!important;
		border-width: thin;
		border-color: #000!important
	}

	.myp1 {
		background-color: #4a4a4a!important
	}

	.panel-default > .panel-heading {
		color: #fff!important;
		background-color: #282d3a!important;
		border-color: #232323!important;
		padding: 12px 24px;
	}

	.panel-info {
		border-width: thin;
		border-color: transparent !important;
	}

	.panel-info > .panel-heading {
		color: #fff!important;
		background-color: #1f2430 !important;
		border-color: transparent !important;
	}

	.form-control {
		background-color: #232834!important;
		color: #fff!important;
		border: none!important
	}

	.thumbnail {
		background-color: #232834!important
	}

	.alert-info-ex {
		color: #fff!important;
		background-color: #2f5371!important;
		border-color: #000!important
	}

	.btn-info {
		background-color: #282d3a!important
	}

	.label.label-info {
		background-color: #2f5371!important;
		color: #fff!important
	}

	.col-sm-12 {
		background: none!important
	}


	.alert-info {
		background-color: #4a4a4a!important;
		color: #fff!important;
		border-color: #000!important
	}

	.alert-warning {
		color: #fff!important;
		background: 0 0!important;
		border-color: #151515!important
	}

	.alert-info-ex {
		background-color: #1f2430 !important;
		border-color: #232323 !important
	}

	/* Navbar */
	.navbar {
		border-color: #232323!important;
	}

	.navbar-default {
		background-color: #2f5371 !important;
		border-color: #232323 !important
	}

	.navbar-default .navbar-nav > li > a {
		color: #fff!important
	}

	.navbar-default .navbar-brand {
		color: #fff!important
	}

	.navbar-default .navbar-collapse,
	.navbar-default .navbar-form {
		border-color: #e7e7e7;
		background: #1f2430 !important;
	}

	.loginbar {
		filter: grayscale(1);
	}

	/* Navbar Search */
	.navbar-form.navbar-right {
		float: right !important;
	}

	#btnSearch + .hidden-xs {
		display: none !important;
	}

	.navbar-form .form-group {
		position: relative;
		right: 50px;
		top: -70px;
	}

	.navbar-form .form-group .form-control {
		background-color: #1f2430!important;
		    border-radius: 4px;
		height: 50px;
		width: 450px !important;
	}

	.navbar-form .form-group .btn.btn-info {
    position: relative;
    right: 50px;
    background-color: #1f2430 !important;
	}


	/* Home Landing */
	.btn,
	.close {
		color: #fff!important
	}

	.panel-body .btn-primary {
		background-color: #5ba2d0 !important;
		display: block;
		min-width: 70%;
		padding: 15px 24px;
		margin: 0 auto;
		font-size: 20px;
	}

	.panel-body .btn-primary:hover {
		color: #fff !important;
	}

	#btnhome {
		padding: 12px 24px;
		border-radius: 2px;
		border-color: transparent;
		outline: none;
		font-size: 24px;
		font-weight: bold;
		letter-spacing: 0;
		margin-top: 12px;
		background-color: #519aba;
	}

	.panel-body > div > p:first-of-type {
		margin-top: 20px;
		margin-bottom: 20px;
	}

	/* Logo */
	h3 > img {
		filter: grayscale(1);
	}
}