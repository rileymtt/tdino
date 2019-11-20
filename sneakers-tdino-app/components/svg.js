import React from 'react';
// import { Font, Svg } from 'expo';
import Svg, {
    Circle,
    Rect,
    Path,
    Polygon,
    Polyline,
    Line,
    G,
    LinearGradient,
    RadialGradient,
    Defs,
    Ellipse,
    Stop,
} from 'react-native-svg'

export class PlusFill extends React.Component {
    render() {
        return (
            <Svg style={this.props.style_container} width={this.props.width} height={this.props.height} viewBox="0 0 52 52">
                <Path fill={this.props.iconColor} d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M38.5,28H28v11c0,1.104-0.896,2-2,2 s-2-0.896-2-2V28H13.5c-1.104,0-2-0.896-2-2s0.896-2,2-2H24V14c0-1.104,0.896-2,2-2s2,0.896,2,2v10h10.5c1.104,0,2,0.896,2,2 S39.604,28,38.5,28z" />
            </Svg>
        )
    }
}

export class PlusStroke extends React.Component {
    render() {
        return (
            <Svg style={this.props.style_container} width={this.props.width} height={this.props.height} viewBox="0 0 52 52">
                <Path fill={this.props.iconColor} d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26 S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z" />
                <Path fill={this.props.iconColor} d="M38.5,25H27V14c0-0.553-0.448-1-1-1s-1,0.447-1,1v11H13.5c-0.552,0-1,0.447-1,1s0.448,1,1,1H25v12c0,0.553,0.448,1,1,1 s1-0.447,1-1V27h11.5c0.552,0,1-0.447,1-1S39.052,25,38.5,25z" />
            </Svg>
        )
    }
}

export class SearchFill extends React.Component {
    render() {
        return (
            <Svg style={this.props.style_container} width={this.props.width} height={this.props.height} viewBox="0 0 482.47 500">
                <Path fill={this.props.iconColor}
                    d="M460.08,500c-7.89-2.39-13.61-7.7-19.19-13.52q-55.51-58-111.29-115.82c-1-1.05-1.89-2.21-2.93-3.44-52.08,34.83-108.18,45.24-168.34,29.41C109,383.64,69.92,355.2,42,312.51-13.66,227.25,2,115.05,78.15,49.68,155.92-17.11,268.34-16.43,344.61,51c79.1,69.88,93,194.83,20.71,280.86q20.42,21.24,40.88,42.54c25.27,26.28,50.17,52.92,75.95,78.69,17,17,8.48,42.3-11.51,46.4-.29.06-.53.36-.8.55ZM210.42,351.07c82,.26,148.92-66.4,149.31-148.79.4-82.11-66.19-149.21-148.45-149.61S61.77,118.91,61.48,201.42,127.89,350.8,210.42,351.07Z"
                    transform="translate(-8.76)"
                />
            </Svg>
        )
    }
}

export class SearchStroke extends React.Component {
    render() {
        return (
            <Svg style={this.props.style_container} width={this.props.width} height={this.props.height} viewBox="0 0 52.966 52.966">
                <Path fill={this.props.iconColor} d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21 c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279 C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19 S32.459,40,21.983,40z" />
            </Svg>
        )
    }
}

export class SneakerFill extends React.Component {
    render() {
        return (
            <Svg style={this.props.style_container} width={this.props.width} height={this.props.height} viewBox="0 0 512 512">
                <Path fill={this.props.iconColor} d="m144.178 249.753 40 32a8 8 0 0 1 2.592 8.777l-4.457 13.37q4.485.093 8.967.1h188.872l16.779-20.994a8 8 0 0 1 5.366-2.957l46.753-5.195a60.461 60.461 0 0 0 -18.38-2.854c-19.99 0-31.258-4.1-47.988-10.781l-5.567-2.228-26.124 17.416a42.265 42.265 0 0 1 -39.945 3.8l-93.481-39.361a36.141 36.141 0 0 1 -9.775-60.508l10.5-9.192a318.113 318.113 0 0 1 -39.1-38.658l-12.134 14.567a29.146 29.146 0 0 0 1.78 39.292 8 8 0 0 1 -1.219 12.313l-16.117 10.746a39.273 39.273 0 0 1 -59.038-20.254l-2.889-8.669a18.051 18.051 0 0 0 -15.664-12.448c-.373-.023-.745-.035-1.114-.035a17.478 17.478 0 0 0 -17.273 14.635l-4.45 26.681c-.014.085-.03.169-.047.253l-3.075 15.377 93.172 23.293a8.006 8.006 0 0 1 3.056 1.514z" />
                <Path fill={this.props.iconColor} d="m211.707 210.745a20.026 20.026 0 0 0 12.067 15.355l93.481 39.361a26.305 26.305 0 0 0 24.861-2.363l17.728-11.818-13.752-6.88-14.585 14.586a8 8 0 0 1 -11.314-11.314l10.814-10.813-16.916-8.459-14.584 14.584a8 8 0 0 1 -11.314-11.314l10.813-10.812-16.916-8.458-14.583 14.583a8 8 0 0 1 -11.314-11.314l11.051-11.05c-1.169-.648-2.347-1.287-3.5-1.946-4.506-2.574-8.87-5.212-12.975-7.839-6.708-4.264-13.309-8.835-19.7-13.614l-12.744 11.151a20.026 20.026 0 0 0 -6.618 18.374z" />
                <Path fill={this.props.iconColor} d="m473.683 289.817c-.491-.491-1-.961-1.5-1.433l-64.819 7.2-17.114 21.41a8 8 0 0 1 -6.25 3.006h-192.72q-9.96 0-19.931-.45h-.018c-.019 0-.039 0-.058 0a454.8 454.8 0 0 1 -68.9-8.352l-63.7-12.741a96.606 96.606 0 0 0 2.027 10.636 30.135 30.135 0 0 1 -3.41 22.948l-4.317 7.2a3.155 3.155 0 0 0 2.7 4.777l296.508.32a385.047 385.047 0 0 0 67.317-5.878l13.117-2.323 53.066-10.748a21.55 21.55 0 0 0 14.319-20.309 21.73 21.73 0 0 0 -6.317-15.263z" />
                <Path fill={this.props.iconColor} d="m165.668 303.239 4.159-12.477-34.281-27.424-90.738-22.685-2.343 11.714 55.475 13.872a8 8 0 1 1 -3.88 15.522l-54.712-13.68a97.557 97.557 0 0 0 -1.484 13.895l67.645 13.529a438.386 438.386 0 0 0 60.159 7.734z" />
            </Svg>
        )
    }
}

export class SneakerStroke extends React.Component {
    render() {
        return (
            <Svg style={this.props.style_container} width={this.props.width} height={this.props.height} viewBox="0 0 512 512">
                <Path fill={this.props.iconColor} d="m485 278.5c-1.045-1.044-2.123-2.045-3.217-3.023a8.031 8.031 0 0 0 -3.25-2.735 76.707 76.707 0 0 0 -47.863-16.742c-16.305 0-24.909-2.79-42.047-9.637l-9.388-3.756-.041-.017-4.734-1.89-88.048-44.019c-.722-.357-1.436-.723-2.155-1.092l-.049-.024-.044-.023c-4.191-2.144-8.392-4.416-12.485-6.754-4.272-2.441-8.406-4.938-12.307-7.435-8.154-5.184-16.137-10.821-23.729-16.755a301.956 301.956 0 0 1 -46.1-44.658l-4.22-5.06a8 8 0 0 0 -12.29 0l-18.267 21.928a45.182 45.182 0 0 0 -3.288 53.381l-8.849 5.9a23.272 23.272 0 0 1 -34.99-12l-2.889-8.666a33.51 33.51 0 0 0 -65.011 4.577l-4.429 26.558-11.319 56.592a113.828 113.828 0 0 0 -2.145 25.256 8.1 8.1 0 0 0 .036.963 113.671 113.671 0 0 0 3.295 23.6 14.237 14.237 0 0 1 -1.611 10.842l-4.317 7.2a19.154 19.154 0 0 0 16.409 29l296.507.32h.436a400.625 400.625 0 0 0 69.69-6.123l13.214-2.341c.065-.011.129-.023.193-.036l53.67-10.87a8.011 8.011 0 0 0 .927-.247 37.578 37.578 0 0 0 14.705-62.214zm-221.257-75.823c1.154.659 2.332 1.3 3.5 1.946l-11.051 11.05a8 8 0 0 0 11.314 11.314l14.584-14.587 16.916 8.457-10.813 10.812a8 8 0 0 0 11.314 11.314l14.584-14.583 16.916 8.457-10.814 10.813a8 8 0 0 0 11.314 11.314l14.585-14.584 13.752 6.875-17.728 11.818a26.305 26.305 0 0 1 -24.861 2.363l-93.481-39.356a20.143 20.143 0 0 1 -5.448-33.721l12.744-11.151c6.389 4.779 12.99 9.35 19.7 13.614 4.103 2.623 8.467 5.258 12.973 7.835zm-212.719 6.892c.017-.084.033-.168.047-.253l4.45-26.681a17.478 17.478 0 0 1 17.273-14.635c.369 0 .741.012 1.114.035a18.051 18.051 0 0 1 15.664 12.448l2.889 8.669a39.269 39.269 0 0 0 59.039 20.254l16.119-10.75a8 8 0 0 0 1.219-12.313 29.146 29.146 0 0 1 -1.78-39.292l12.134-14.567a318.113 318.113 0 0 0 39.1 38.658l-10.5 9.192a36.141 36.141 0 0 0 9.775 60.508l93.479 39.358a42.265 42.265 0 0 0 39.945-3.8l26.124-17.416 5.567 2.228c16.73 6.688 27.998 10.788 47.988 10.788a60.461 60.461 0 0 1 18.38 2.854l-46.75 5.195a8 8 0 0 0 -5.366 2.957l-16.782 20.994h-188.872q-4.482 0-8.967-.1l4.457-13.37a8 8 0 0 0 -2.592-8.777l-40-32a8.006 8.006 0 0 0 -3.057-1.514l-93.172-23.293zm54.485 85.936-67.645-13.529a97.557 97.557 0 0 1 1.484-13.895l54.712 13.68a8 8 0 1 0 3.88-15.522l-55.475-13.872 2.343-11.714 90.738 22.685 34.281 27.424-4.159 12.477a438.386 438.386 0 0 1 -60.159-7.734zm373.847 14.816a21.557 21.557 0 0 1 -13.673 15.071l-53.066 10.748-13.117 2.323a385.047 385.047 0 0 1 -67.317 5.878l-296.508-.32a3.155 3.155 0 0 1 -2.7-4.777l4.317-7.2a30.135 30.135 0 0 0 3.41-22.948 96.606 96.606 0 0 1 -2.031-10.639l63.7 12.741a454.8 454.8 0 0 0 68.9 8.352h.058.018q9.966.441 19.931.45h192.722a8 8 0 0 0 6.25-3.006l17.109-21.409 64.819-7.2c.506.472 1.014.942 1.5 1.433a21.609 21.609 0 0 1 5.673 20.5z" />
            </Svg>
        )
    }
}

export class TradeFill extends React.Component {
    render() {
        return (
            <Svg style={this.props.style_container} width={this.props.width} height={this.props.height} viewBox="0 0 500 420.34">
                <Path fill={this.props.iconColor}
                    d="M0,459V186.55l89.89,72.69L309.11,39.83c18.67,19.18,37,38,54.34,55.82Z"
                    transform="translate(0 -39.83)"
                />
                <Path fill={this.props.iconColor}
                    d="M201.43,460.17l-55.75-55.83L500,48.18V319.26l-78-80Z"
                    transform="translate(0 -39.83)"
                />
            </Svg>
        )
    }
}

export class TradeStroke extends React.Component {
    render() {
        return (
            <Svg style={this.props.style_container} width={this.props.width} height={this.props.height} viewBox="0 0 500 420.34">
                <Path fill={this.props.iconColor}
                    d="M309,54.07,349.4,95.55,167.21,277.68,10,434.83V207.5L83.6,267l7,5.66L97,266.3,309,54.07m.09-14.24L89.89,259.24,0,186.55V459L363.45,95.65C346.13,77.87,327.78,59,309.11,39.83Z"
                    transform="translate(0 -39.83)"
                />
                <Path fill={this.props.iconColor}
                    d="M490,72.41V294.67l-27.8-28.54-33-33.87L422.12,225,415,232.17l-92.06,92.2L201.43,446l-33.35-33.4-8.28-8.29,223.86-225L490,72.41m10-24.23L145.68,404.34l55.75,55.83L422,239.24l78,80V48.18Z"
                    transform="translate(0 -39.83)"
                />
            </Svg>
        )
    }
}

export class UserFill extends React.Component {
    render() {
        return (
            <Svg style={this.props.style_container} width={this.props.width} height={this.props.height} viewBox="0 0 60 60">
                <Path fill={this.props.iconColor} d="M48.014,42.889l-9.553-4.776C37.56,37.662,37,36.756,37,35.748v-3.381c0.229-0.28,0.47-0.599,0.719-0.951 c1.239-1.75,2.232-3.698,2.954-5.799C42.084,24.97,43,23.575,43,22v-4c0-0.963-0.36-1.896-1-2.625v-5.319 c0.056-0.55,0.276-3.824-2.092-6.525C37.854,1.188,34.521,0,30,0s-7.854,1.188-9.908,3.53C17.724,6.231,17.944,9.506,18,10.056 v5.319c-0.64,0.729-1,1.662-1,2.625v4c0,1.217,0.553,2.352,1.497,3.109c0.916,3.627,2.833,6.36,3.503,7.237v3.309 c0,0.968-0.528,1.856-1.377,2.32l-8.921,4.866C8.801,44.424,7,47.458,7,50.762V54c0,4.746,15.045,6,23,6s23-1.254,23-6v-3.043 C53,47.519,51.089,44.427,48.014,42.889z" />
            </Svg>
        )
    }
}

export class UserStroke extends React.Component {
    render() {
        return (
            <Svg style={this.props.style_container} width={this.props.width} height={this.props.height} viewBox="0 0 60 60">
                <Path fill={this.props.iconColor} d="M48.014,42.889l-9.553-4.776C37.56,37.662,37,36.756,37,35.748v-3.381c0.229-0.28,0.47-0.599,0.719-0.951 c1.239-1.75,2.232-3.698,2.954-5.799C42.084,24.97,43,23.575,43,22v-4c0-0.963-0.36-1.896-1-2.625v-5.319 c0.056-0.55,0.276-3.824-2.092-6.525C37.854,1.188,34.521,0,30,0s-7.854,1.188-9.908,3.53C17.724,6.231,17.944,9.506,18,10.056 v5.319c-0.64,0.729-1,1.662-1,2.625v4c0,1.217,0.553,2.352,1.497,3.109c0.916,3.627,2.833,6.36,3.503,7.237v3.309 c0,0.968-0.528,1.856-1.377,2.32l-8.921,4.866C8.801,44.424,7,47.458,7,50.762V54c0,4.746,15.045,6,23,6s23-1.254,23-6v-3.043 C53,47.519,51.089,44.427,48.014,42.889z M51,54c0,1.357-7.412,4-21,4S9,55.357,9,54v-3.238c0-2.571,1.402-4.934,3.659-6.164 l8.921-4.866C23.073,38.917,24,37.354,24,35.655v-4.019l-0.233-0.278c-0.024-0.029-2.475-2.994-3.41-7.065l-0.091-0.396l-0.341-0.22 C19.346,23.303,19,22.676,19,22v-4c0-0.561,0.238-1.084,0.67-1.475L20,16.228V10l-0.009-0.131c-0.003-0.027-0.343-2.799,1.605-5.021 C23.253,2.958,26.081,2,30,2c3.905,0,6.727,0.951,8.386,2.828c1.947,2.201,1.625,5.017,1.623,5.041L40,16.228l0.33,0.298 C40.762,16.916,41,17.439,41,18v4c0,0.873-0.572,1.637-1.422,1.899l-0.498,0.153l-0.16,0.495c-0.669,2.081-1.622,4.003-2.834,5.713 c-0.297,0.421-0.586,0.794-0.837,1.079L35,31.623v4.125c0,1.77,0.983,3.361,2.566,4.153l9.553,4.776 C49.513,45.874,51,48.28,51,50.957V54z" />
            </Svg>
        )
    }
}