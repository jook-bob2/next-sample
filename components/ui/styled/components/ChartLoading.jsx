import React from 'react'
import styled from 'styled-components'
const LoadingChart = styled.div`
	width: 100%;
	height: 100%;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: end;
	-ms-flex-pack: end;
	justify-content: flex-end;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	.chart_loading_animation {
		/* @include flex(space-around, flex-end); */
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-pack: distribute;
		justify-content: space-around;
		-webkit-box-align: end;
		-ms-flex-align: end;
		align-items: flex-end;
		width: 50%;
		height: 100%;
		min-height: 200px;
		.bar {
			width: 18%;
			max-width: 60px;
			height: 0px;
			background: #dedede;
			transition: height 0.5s;
			animation: chartloading 1.5s infinite forwards;
			&:nth-of-type(1) {
				animation-delay: 0.2s;
			}
			&:nth-of-type(2) {
				animation-delay: 0.4s;
			}
			&:nth-of-type(3) {
				animation-delay: 0.6s;
			}
			&:nth-of-type(4) {
				animation-delay: 0.8s;
			}
		}
	}
	p {
		padding-top: 20px;
		font-size: 15px;
		color: #aaaaaa;
		span {
			animation: chartloadingdot 1s infinite forwards;
			opacity: 1;
			&:nth-of-type(1) {
				// animation-delay: 0.33s;
				animation-timing-function: cubic-bezier(0, 0.68, 0.29, 1);
			}
			&:nth-of-type(2) {
				animation-timing-function: cubic-bezier(0.21, 0.65, 0.39, 0.91);
				// animation-delay: 0.66s;
			}
			&:nth-of-type(3) {
				animation-timing-function: cubic-bezier(0.58, 0.4, 0.64, 0.59);
				// animation-delay: 0.99s;
			}
		}
	}

	@keyframes chartloading {
		0% {
			height: 0px;
		}
		50% {
			height: 100px;
		}
		100% {
			height: 0;
		}
	}
	@keyframes chartloadingdot {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`
function ChartLoading() {
	return (
		<LoadingChart className="chart_loading_container">
			<div className="chart_loading_animation">
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>
			</div>
			<p>
				loading
				<span>.</span>
				<span>.</span>
				<span>.</span>
			</p>
		</LoadingChart>
	)
}

export default ChartLoading
