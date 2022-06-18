import React, { useState } from 'react';
import './App.css';
import Slider from './Slider';
import SidebarItem from './SidebarItem';
import Resetfunction from './Resetfunction';

const styleobj = {
  marginTop:'4px',
  height:'50px',
  width:'50px',
  padding:'6px',
  marginLeft:'35px'
}


const DEFAULT_OPTIONS =
  [
    {
      name: 'Brightness',
      property: 'brightness',
      value: 100,
      range: {
        min: 0,
        max: 200
      },
      unit: '%'
    },

    {
      name: 'Contrast',
      property: 'contrast',
      value: 100,
      range: {
        min: 0,
        max: 200
      },
      unit: '%'
    },

    {
      name: 'Saturation',
      property: 'saturate',
      value: 100,
      range: {
        min: 0,
        max: 200
      },
      unit: '%'
    },

    {
      name: 'Grayscale',
      property: 'grayscale',
      value: 0,
      range: {
        min: 0,
        max: 100
      },
      unit: '%'
    },

    {
      name: 'Black and White',
      property: 'sepia',
      value: 0,
      range: {
        min: 0,
        max: 100
      },
      unit: '%'
    },

    {
      name: 'Hue Rotate',
      property: 'Hue-rotate',
      value: 0,
      range: {
        min: 0,
        max: 360
      },
      unit: 'deg'
    },

    {
      name: 'Blur',
      property: 'blur',
      value: 0,
      range: {
        min: 0,
        max: 20
      },
      unit: 'px'
    }

  ]

function App() {

  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)

  const [options, setOptions] = useState(DEFAULT_OPTIONS)

  const selectedOption = options[selectedOptionIndex]

  // console.log(selectedOption)
  console.log(setSelectedOptionIndex)

  function handleSliderChange({ target }) {
    setOptions(prevOption => {
      return prevOption.map((option, index) => {
        if (index !== selectedOptionIndex) return option

        return { ...option, value: target.value }

      })
    })
  }

  function getImageStyle() {
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`
    })

    return { filter: filters.join(' ')}
  }

  return (
    <div className="container">
      <div className="main-image" style={getImageStyle()}></div>
      {/* <Image text="Image"/> */}
      {/* <Buttonupload /> */}
      <div className="sidebar">
        {options.map((option, index) => {
          return (
            <SidebarItem
              key={index}
              name={option.name}
              active={index === selectedOptionIndex}
              handleClick={() => setSelectedOptionIndex(index)}
              />
              )
            })}
            <Resetfunction/>
      </div>
      <Slider
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        handleChange={handleSliderChange}
        />
    </div>
  )
}

export default App;
