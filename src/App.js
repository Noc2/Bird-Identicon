import './App.css';
import tinycolor from 'tinycolor2'
import { u8aToHex, isHex, hexToU8a } from '@polkadot/util';
import { decodeAddress, encodeAddress } from '@polkadot/util-crypto';
import React, { useState } from 'react';

function App() {
    const [kusamaAddress, setKusamaAddress] = useState('F3opxRbN5ZbjJNU511Kj2TLuzFcDq9BGduA9TgiECafpg29');
    const [notification, setNotification] = useState('Enter your Kusama address');

    function keyToHex (address){
      const publicKey = decodeAddress(address);
      const hexPublicKey = u8aToHex(publicKey).toString();
      return hexPublicKey.substring(2);
    } 

    const isValidAddressPolkadotAddress = (address) => {
      try {
        encodeAddress(
          isHex(address)
            ? hexToU8a(address)
            : decodeAddress(address)
        );
        return true;
      } catch (error) {
        return false;
      }
    };

    let onChange= (event) => {
      const newValue = event.target.value; 
      if (isValidAddressPolkadotAddress(newValue)){
        setNotification("Valid address");
        setKusamaAddress(newValue);
      }
      else{
        setNotification("No valid address");
      }
    };

    var addressArray = [];

    let hexAddress = keyToHex(kusamaAddress);

    for (var i = 0,charsLength = hexAddress.length; i < (charsLength- 6); i += 6) {
      addressArray.push(hexAddress.substring(i,i + 6));
    }

    let eye = '#151515'; //Black 
    let base = tinycolor('#' +addressArray[0]).darken(35).toString(); // '#060606'; //Black 
    let baseLight = tinycolor(base).brighten(15).toString(); //grey
    let iOne = '#' +addressArray[1] // '#eec16e'; 
    let iTwo = '#' +addressArray[2]; // '#b2b1b7'; //grey
    let iTwoMedium = tinycolor(iTwo).darken(30).toString(); //medium grey
    let iTwoDark = tinycolor(iTwo).darken(50).toString(); //'#8a8894'; //dark grey 
    
  return (
      <div className="container">
        <h1 className="heading"><span className="underline--magical">Kusama Bird Identicon</span> </h1>
        <div className="bird">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 500" preserveAspectRatio="xMinYMin" className="svgBird">
          <path id='path14437' d= 'm 495.67653,93.719633 7.65012,-19.67631 31.441,11.23795 z'style={{fill:baseLight}}></path>
          <path id='path14439' d= 'm 495.62423,93.867573 7.70242,-19.82425 -9.59645,-19.31917 z'style={{fill:base}}></path> 
          <path id='path4158' d= 'm 496.00304,93.993843 -2.26694,-39.3102 -22.76178,20.4497 z'style={{fill:baseLight}}></path>
          <path id='path4160' d= 'm 452.43161,51.136693 41.43076,3.79949 -22.13044,20.70223 z'style={{fill:baseLight}}></path>
          <path id='path4166' d= 'm 451.92654,51.389233 42.44091,3.54695 -29.95913,-18.18864 z'style={{fill:baseLight}}></path>
          <path id='path4168' d= 'm 452.68415,50.884153 -33.69934,-13.12056 46.18112,-1.26859 z'style={{fill:tinycolor(baseLight).darken(5).toString()}}></path>
          <path id='path4174' d= 'm 452.43161,51.136693 -33.57306,14.15356 52.87338,10.34816 z'style={{fill:tinycolor(iTwo).brighten(25).toString()}}></path>
          <path id='path4176' d= 'm 484.35602,121.61278 -66.02049,-56.827607 53.3964,10.34817 z'style={{fill:tinycolor(iTwo).brighten(15).toString()}}></path>
          <path id='path4178' d= 'm 483.99888,119.82707 12.13633,-25.494927 -25.16089,-19.1988 z'style={{fill:tinycolor(iTwo).darken(7).toString()}}></path>
          <path id='path4213' d= 'm 464.88829,67.565263 6.26487,3.42068 -6.62908,4.43955 z'style={{fill:eye}}></path>
          <path id='path4215' d= 'm 471.95935,76.025293 -0.80619,-5.03935 -7.00789,4.18701 z'style={{fill:eye}}></path>
          <path id='path4217' d= 'm 471.95935,76.025293 -1.43754,4.93591 -7.13415,-6.4196 z'style={{fill:eye}}></path>
          <path id='path4219' d= 'm 465.6459,82.970083 4.74964,-2.26142 -6.25027,-5.53571 z'style={{fill:eye}}></path>
          <path id='path4221' d= 'm 465.6459,82.970083 -5.35188,-1.75635 4.4826,-6.67213 z'style={{fill:eye}}></path>
          <path id='path4223' d= 'm 456.80707,76.530363 3.73949,4.80964 4.23006,-6.7984 z'style={{fill:eye}}></path>
          <path id='path4225' d= 'm 456.80707,76.530363 2.22426,-6.0495 6.75544,4.94463 z'style={{fill:eye}}></path>
          <path id='path4227' d= 'm 464.88829,67.565253 -5.85696,2.91561 5.74529,5.0709 z'style={{fill:eye}}></path>
          <path id='path4229' d= 'm 452.68415,50.884153 -32.60252,-12.84636 -1.65809,28.18301 z'style={{fill:baseLight}}></path>
          <path id='path4231' d= 'm 374.82701,64.812723 45.7993,-27.80675 -0.26912,29.68029 z'style={{fill:tinycolor(baseLight).darken(8).toString()}}></path>
          <path id='path4233' d= 'm 374.82701,64.812723 75.7993,64.336107 -31.53181,-63.725257 z'style={{fill:base}}></path>
          <path id='path4235' d= 'm 484.82701,120.88416 -34.2007,8.26467 -32.7945,-64.735407 z'style={{fill:baseLight}}></path>
          <path id='path4237' d= 'm 484.82701,120.88416 -35.46339,7.50706 43.30231,38.10379 z'style={{fill:base}}></path>
          <path id='path4387' d= 'm 374.82701,64.812723 75.7993,64.336107 -93.65619,-17.25823 z'style={{fill:tinycolor(iOne).darken(1).toString()}}></path>
          <path id='path4389' d= 'm 388.46407,148.65539 62.16224,-19.50656 -93.65619,-17.25823 z'style={{fill:tinycolor(iOne).darken(10).toString()}}></path>
          <path id='path4391' d= 'm 391.24199,149.413 -74.4609,-1.07127 40.18903,-36.45113 z'style={{fill:tinycolor(iTwo).darken(12).toString()}}></path>
          <path id='path4399' d= 'm 442.85003,197.52194 40.81199,24.66261 9.00391,-55.68954 z'style={{fill:tinycolor(iOne).darken(12).toString()}}></path>
          <path id='path4401' d= 'm 444.11272,198.02702 4.37073,-71.02104 44.18248,39.48903 z'style={{fill:iOne}}></path>
          <path id='path4403' d= 'm 444.11272,198.02702 4.37073,-71.02104 -51.40925,60.9176 z'style={{fill:tinycolor(iOne).darken(15).toString()}}></path>
          <path id='path4405' d= 'm 389.827,148.74131 58.65645,-21.73533 -51.40925,60.9176 z'style={{fill:tinycolor(iOne).darken(13).toString()}}></path>
          <path id='path4407' d= 'm 389.827,148.74131 58.65645,-21.73533 -92.96036,-15.51097 z'style={{fill:tinycolor(iOne).darken(5).toString()}}></path>
          <path id='path4409' d= 'm 389.827,148.74131 -72.05784,-1.73533 81.2387,42.85125 z'style={{fill:tinycolor(iTwo).darken(7).toString()}}></path>
          <path id='path4514' d= 'm 295.88281,209.35046 21.88635,-62.34448 -70.78926,73.6609 z'style={{fill:iTwo}}></path>
          <path id='path4516' d= 'm 295.88281,209.35046 21.88635,-62.34448 34.26661,56.48831 z'style={{fill:tinycolor(iTwo).darken(7).toString()}}></path>
          <path id='path4518' d= 'm 397.90822,188.13726 -80.13906,-41.13128 34.26661,56.48831 z'style={{fill:iTwo}}></path>
          <path id='path4520' d= 'm 397.90822,188.13726 -28.74384,48.18057 -17.12861,-32.82354 z'style={{fill:tinycolor(iTwo).brighten(17).toString()}}></path>
          <path id='path4522' d= 'm 398.4133,187.12711 -30.67749,49.905 76.22385,-39.59873 z'style={{fill:tinycolor(iOne).darken(17).toString()}}></path>
          <path id='path4524' d= 'm 413.06051,230.56367 -41.75327,4.32559 72.90495,-37.70842 z'style={{fill:tinycolor(iOne).darken(17).toString()}}></path>
          <path id='path4526' d= 'm 413.06051,230.56367 70.87874,-8.30132 -40.48467,-25.33405 z'style={{fill:tinycolor(iOne).darken(13).toString()}}></path>
          <path id='path4528' d= 'm 411.81051,230.3851 72.12874,-8.12275 -51.59635,22.14312 z'style={{fill:tinycolor(iOne).darken(10).toString()}}></path>
          <path id='path4548' d= 'm 443.36509,267.93931 40.57416,-45.67696 -51.59635,22.14312 z'style={{fill:tinycolor(iOne).darken(4).toString()}}></path>
          <path id='path4550' d= 'm 443.36509,267.93931 -66.32869,-1.94453 55.3065,-21.58931 z'style={{fill:tinycolor(iOne).darken(10).toString()}}></path>
          <path id='path4490' d= 'm 195.48234,305.86569 -24.85604,5.426 54.92503,-53.48195 z'style={{fill:tinycolor(iTwo).brighten(12).toString()}}></path>
          <path id='path4701' d= 'm 223.33949,260.50855 -52.71319,50.78314 76.3536,-90.62481 z'style={{fill:tinycolor(iTwo).brighten(7).toString()}}></path>
          <path id='path4488' d= 'm 194.45424,306.13617 69.74348,-39.84448 -41.14639,-5.62481 z'style={{fill:tinycolor(iTwo).brighten(14).toString()}}></path>
          <path id='path4703' d= 'm 221.95424,261.49332 42.24348,4.79837 -17.21782,-45.62481 z'style={{fill:iTwo}}></path>
          <path id='path4705' d= 'm 295.88281,208.81474 -33.20032,57.72949 -15.70259,-45.87735 z'style={{fill:tinycolor(iTwo).brighten(14).toString()}}></path>
          <path id='path4707' d= 'm 295.88281,208.63617 -33.76668,58.97948 49.86377,-34.80592 z'style={{fill:tinycolor(iTwo).brighten(7).toString()}}></path>
          <path id='path4718' d= 'm 295.52567,208.63617 58.3149,-5.20163 -43.28924,30.80376 z'style={{fill:tinycolor(iTwo).brighten(13).toString()}}></path>
          <path id='path4720' d= 'm 369.45424,234.35045 -16.6851,-30.20162 -44.00353,30.44661 z'style={{fill:tinycolor(iTwo).darken(5).toString()}}></path>
          <path id='path4722' d= 'm 369.45424,234.35045 -107.57796,33.01267 48.67505,-34.37482 z'style={{fill:tinycolor(iTwo).brighten(12).toString()}}></path>
          <path id='path4724' d= 'm 369.45424,234.35045 -107.9351,32.8341 47.42504,0.62519 z'style={{fill:tinycolor(iTwo).brighten(16).toString()}}></path>
          <path id='path4726' d= 'm 369.45424,234.35045 -25.97082,33.72695 -35.96781,-0.62479 z'style={{fill:tinycolor(iOne).darken(20).toString()}}></path>
          <path id='path4728' d= 'm 369.45424,234.35045 -25.61367,33.19124 35.46075,0.62521 z'style={{fill:tinycolor(iOne).darken(14).toString()}}></path>
          <path id='path4730' d= 'm 369.27567,234.17188 44.29441,-3.59448 -35.8759,35.0895 z'style={{fill:tinycolor(iOne).darken(7).toString()}}></path>
          <path id='path4732' d= 'm 433.02567,244.35045 -20.97082,-13.77305 -34.36067,35.0895 z'style={{fill:iOne}}></path>
          <path id='path4791' d= 'm 38.508233,405.87079 132.118067,-94.5791 -132.242894,85.64681 z'style={{fill:tinycolor(iTwo).darken(10).toString()}}></path>
          <path id='path4793' d= 'm 38.508233,405.87079 132.118067,-94.5791 25.59344,-6.27707 z'style={{fill:tinycolor(iTwo).brighten(7).toString()}}></path>
          <path id='path4795' d= 'm 38.508233,405.87079 107.874407,-57.20345 50.84725,-44.66287 z'style={{fill:tinycolor(iTwo).darken(22).toString()}}></path>
          <path id='path4806' d= 'm 225.38644,305.36061 -79.0038,43.30673 49.58456,-43.65272 z'style={{fill:tinycolor(iTwo).darken(22).toString()}}></path>
          <path id='path4808' d= 'm 225.38644,305.36061 37.16374,-38.51563 -68.09821,38.16964 z'style={{fill:tinycolor(iTwo).brighten(9).toString()}}></path>
          <path id='path4810' d= 'm 225.38644,305.36061 37.16374,-38.51563 -6.22637,32.10873 z'style={{fill:tinycolor(iTwo).darken(28).toString()}}></path>
          <path id='path5485' d= 'm 277.47927,304.1001 -15.28623,-37.79083 -6.62684,32.64444 z'style={{fill:tinycolor(iTwo).darken(3).toString()}}></path>
          <path id='path4812' d= 'm 305.69356,311.42153 -43.50052,-45.11226 14.9803,37.64444 z'style={{fill:tinycolor(iTwo).darken(1).toString()}}></path>
          <path id='path4492' d= 'm 305.69356,311.42153 -2.2322,-24.37349 -42.03294,-21.22015 z'style={{fill:tinycolor(iOne).darken(7).toString()}}></path>
          <path id='path4814' d= 'm 305.69356,311.42153 -4.75758,-26.3938 51.57949,30.05779 z'style={{fill:tinycolor(iOne).darken(16).toString()}}></path>
          <path id='path4816' d= 'm 310.87957,264.9672 -48.32939,1.87778 40.55447,22.03784 z'style={{fill:tinycolor(iOne).darken(18).toString()}}></path>
          <path id='path4836' d= 'm 309.97402,265.2937 40.9645,50.0386 -49.63228,-27.59487 z'style={{fill:tinycolor(iOne).darken(14).toString()}}></path>
          <path id='path4838' d= 'm 310.15259,266.05132 40.78593,49.28098 -6.44826,-48.37697 z'style={{fill:tinycolor(iOne).darken(18).toString()}}></path>
          <path id='path4840' d= 'm 379.73056,266.02067 -28.79204,49.31163 -6.98397,-48.1984 z'style={{fill:tinycolor(iOne).darken(15).toString()}}></path>
          <path id='path4851' d= 'm 379.73056,265.66353 -28.79204,49.66877 27.86629,-8.29737 z'style={{fill:tinycolor(iOne).darken(18).toString()}}></path>
          <path id='path4853' d= 'm 378.65914,266.02067 27.83777,31.12889 -27.6921,9.88537 z'style={{fill:tinycolor(iOne).darken(7).toString()}}></path>
          <path id='path4855' d= 'm 377.23056,265.30639 29.26635,31.84317 37.67195,-29.7198 z'style={{fill:tinycolor(iOne).darken(15).toString()}}></path>
          <path id='path4895' d= 'm 365.83262,315.17767 -14.8941,0.15463 56.15056,-18.3989 z'style={{fill:iTwoDark}}></path>
          <path id='path4897' d= 'm 365.83262,314.82053 -15.90425,-1.00346 49.91325,60.04998 z'style={{fill:iTwoDark}}></path>
          <path id='path4921' d= 'm 365.83262,315.17767 39.21304,48.01177 -5.20404,10.67761 z'style={{fill:tinycolor(iTwo).darken(22).toString()}}></path>
          <path id='path4923' d= 'm 452.26119,375.17767 -48.28696,-12.88109 -4.13261,11.57047 z'style={{fill:iTwoMedium}}></path>
          <path id='path4925' d= 'm 373.68976,378.7491 18.32018,-13.95251 7.83168,9.07046 z'style={{fill:iTwoMedium}}></path>
          <path id='path4927' d= 'm 309.40405,317.32053 42.03955,-2.99838 -42.49484,-2.59796 z'style={{fill:iTwoDark}}></path>
          <path id='path4929' d= 'm 309.22548,316.60624 15.17987,-0.78151 1.15055,50.00664 z'style={{fill:iTwoDark}}></path>
          <path id='path4931' d= 'm 309.40405,317.32053 3.32019,58.54749 12.83166,-10.03669 z'style={{fill:iTwo}}></path>
          <path id='path4933' d= 'm 367.97548,376.60624 -55.25124,-0.73822 12.83166,-10.03669 z'style={{fill:tinycolor(iTwo).darken(40).toString()}}></path>
          <path id='path4935' d= 'm 289.22548,379.9991 23.49876,-4.13108 -0.5612,-12.00098 z'style={{fill:tinycolor(iTwo).darken(40).toString()}}></path>
        </svg>
        </div>
        <div className="labelContainer">
        <div className="group">      
        <input onChange={onChange} required/>
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>{notification}</label>
        </div>
        </div>
      </div>
  );
}

export default App;
