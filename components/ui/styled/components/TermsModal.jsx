import styled from 'styled-components'

export const TermsModal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: block;
	background: rgba(0, 0, 0, 0.5);
	z-index: 200000;
	.modal {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: -ms-flexbox;
		-webkit-display: flex;
		display: flex;
		-ms-flex-direction: column;
		flex-direction: column;
		width: auto;
		min-width: 200px;
		max-width: 500px;
		min-height: 150px;
		padding: 30px;
		background: #ffffff;
		border: solid 1px #e8e8e8;
		box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
		/* z-index: 200000; */
		.modal-title {
			font-size: 24px;
			font-weight: 500;
			line-height: 1.5;
			letter-spacing: -0.6px;
			text-align: left;
			color: #202020;
			padding-bottom: 20px;
		}
		.modal-contents {
			margin-bottom: 20px;
			max-height: 65vh;
			overflow-y: auto;
			box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
			p {
				font-size: 12px;
				line-height: 1.5;
				letter-spacing: -0.3px;
				color: #202020;
			}
		}
		&.terms {
			.modal-contents {
				text-align: left;
			}
		}
		&.privacy {
			table {
				border-collapse: collapse;
				th,
				td {
					font-size: 14px;
					line-height: 1.43;
					letter-spacing: -0.35px;
					color: #202020;
					border: 1px solid #ccc;
					padding: 15px 25px;
				}
				thead {
					background-color: #f6f6f6;
					th {
						text-align: center;
						white-space: nowrap;
					}
				}
				tbody {
					td {
						text-align: left;
						vertical-align: top;
						word-break: keep-all;
					}
				}
			}
		}
		&.ad {
			.modal-contents {
				box-shadow: none;
			}
			table {
				width: 100%;
				border-collapse: separate;
				border-spacing: 5px;
				caption {
					margin-top: 20px;
					font-size: 10px;
					line-height: 1.5;
					letter-spacing: -0.25px;
					color: #202020;
					text-align: left;
					caption-side: bottom;
				}
				.col1 {
					width: 110px;
				}
				.col2 {
					width: calc(100% - 110px);
				}
				th,
				td {
					font-size: 11px;
					line-height: 1.55;
					letter-spacing: -0.28px;
					color: #202020;
					padding: 10px 5px;
				}
				th {
					text-align: center;
					background: #f6f6f6;
					font-weight: normal;
				}
				td {
					text-align: left;
				}
			}
		}
	}
	.modal-footer {
		margin: 0 auto;
		button {
			width: auto;
			height: 35px;
			border-radius: 3px;
			padding: 8px 20px;
			span {
				font-size: 14px;
				font-weight: 500px;
				color: #ffffff;
				letter-spacing: -0.4px;
			}
			& ~ button {
				margin-left: 20px;
			}
			&.cancel {
				background: #808080;
			}
			&.confirm {
				background: #4b3f8f;
			}
		}
	}
	@media (min-width: 767px) and (max-width: 1240px) {
		.modal {
			width: 70vw;
			max-width: 600px;
		}
	}
	@media (min-width: 0) and (max-width: 767px) {
		.modal {
			width: 90vw;
			max-width: initial;
			&.ad {
				.modal-contents {
					max-height: 60vh;
					box-shadow: none;
				}
				table {
					.col1 {
						width: initial;
						min-width: 80px;
					}
					.col2 {
						width: initial;
					}
				}
			}
		}
	}
`
export default TermsModal
