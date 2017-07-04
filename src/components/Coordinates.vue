<template>
  <div class="coordinates">
    <div class="container">
  
      <div class="Header">
        <h1>Погодный информер</h1>
      </div>

      <div class="Fields">
      <fieldset>
        <legend>Выберите точку земного шара</legend>
        <form class="form-inline">
          <label class="sr-only" for="inlineFormInput">Latitude</label>
          <input type="text" v-model="coordinates.latitude" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormLong" placeholder="Долгота">
          <label class="sr-only" for="inlineFormInputGroup">Longitude</label>
          <input type="text" v-model="coordinates.longitude" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormLati" placeholder="Широта">
  
          <button v-on:click="greet" class="btn btn-primary" name="onGreet">Найти</button>
        </form>
      </fieldset>
      <fieldset>
          <input type="checkbox" id="GeoOnCheck" v-on:click="ongeo" v-model="checked">
          <label for="checkbox">Использовать геолокацию</label>
      </fieldset>

      </div>
      <div class="PullQuote">
        <img src="../assets/open.png"> Погода не отвечает за выполнение прогнозов погоды. Мы тоже...
        <img src="../assets/close.png">
      </div>

      <table class="table">
        <thead>
          <tr>
            <th>Дата</th>
            <th>28.06</th>
            <th>29.06</th>
            <th>30.06</th>
            <th>31.06</th>
            <th>1.07</th>
            <th>2.07</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Зональная составляющая скорости ветра на высоте 10 м (м/c)</th>
            <td>{{information.WindZonal}}</td>
            <td>{{information.WindZonal}}</td>
            <td>{{information.WindZonal}}</td>
            <td>{{information.WindZonal}}</td>
            <td>{{information.WindZonal}}</td>
            <td>{{information.WindZonal}}</td>
          </tr>
          <tr>
            <th scope="row">Меридиональная составляющая скорости ветра на высоте 10 м (м/c)</th>
            <td>{{information.WindMeridional}}</td>
            <td>{{information.WindMeridional}}</td>
            <td>{{information.WindMeridional}}</td>
            <td>{{information.WindMeridional}}</td>
            <td>{{information.WindMeridional}}</td>
            <td>{{information.WindMeridional}}</td>
          </tr>
          <tr>
            <th scope="row">Атмосферное давление на подстилающей поверхности (ГПа)</th>
            <td>{{information.AtmosphericPressure}}</td>
            <td>{{information.AtmosphericPressure}}</td>
            <td>{{information.AtmosphericPressure}}</td>
            <td>{{information.AtmosphericPressure}}</td>
            <td>{{information.AtmosphericPressure}}</td>
            <td>{{information.AtmosphericPressure}}</td>
          </tr>
          <tr>
            <th scope="row">Относительная влажность на высоте 2 м</th>
            <td>{{information.Humidity}}</td>
            <td>{{information.Humidity}}</td>
            <td>{{information.Humidity}}</td>
            <td>{{information.Humidity}}</td>
            <td>{{information.Humidity}}</td>
            <td>{{information.Humidity}}</td>
          </tr>
          <tr>
            <th scope="row">Интенсивность выпадения осадков (мм/час)</th>
            <td>{{information.Rainfall}}</td>
            <td>{{information.Rainfall}}</td>
            <td>{{information.Rainfall}}</td>
            <td>{{information.Rainfall}}</td>
            <td>{{information.Rainfall}}</td>
            <td>{{information.Rainfall}}</td>
          </tr>
          <tr>
            <th scope="row">Температура подстилающей поверхности (C)</th>
            <td>{{information.TemperatureSurface}}</td>
          </tr>
          <tr>
            <th scope="row">Температура воздуха на высоте 2 м (C)</th>
            <td>{{information.AirTemperature}}</td>
          </tr>
        </tbody>
      </table>
  
      <div class="Footer">
        <p class="Disclaimer">Данные предоставлены группой Vladan и Co </p>
        <p>Copyright © ComputePractice2017</p>
      </div>
  
    </div>
  </div>
</template>

<<script>
export default {
  name: 'coordinates',
  data () {
    return {
      coordinates: {
        'latitude': '',
        'longitude': ''
      },
      information: {
        'WindZonal': '-2.3',
        'WindMeridional': '-9.1',
        'AtmosphericPressure': '682',
        'Humidity': '100',
        'Rainfall': '0',
        'TemperatureSurface': '-53.3',
        'AirTemperature': '-52.1'
      }
    }
  },

  methods: {
    greet: function (event) {
      // `this` внутри методов указывает на экземпляр Vue
      alert('Привет, ' + this.name + '!')
      // `event` — нативное событие DOM
      if (event) {
        alert(event.target.tagName)
      }
    },
    geolocationSuccess: function (position) {
      alert('прихали')
    },
    geolocationFailure: function (poserror) {
      alert('кирдык')
    },
    ongeo: function (params) {
      function success (position) {
        alert('SUCCESS(' + position.coords + '): ')
        alert('qqq')
      }
      function error (err) {
        alert('ERROR(' + err.code + '): ' + err.message)
      }
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error)
        alert('поехали')
      } else {
        alert('нетути')
      }
    }
  }
}
</script>

<style>
.form-inline {
  margin-top: 0px;
  margin-bottom: 10px;
}

.Header {
  background-color: #6495ED;
  color: #ffe;
  border: thin #C0C0C0 solid;
  padding: 20px;
  margin: 20px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}

fieldset {
  color: #000000;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

td,
th {
  color: #ffe;
  padding: 4px;
  border: 1px solid #C0C0C0;
}

th {
  background: #6495ED;
  color: #ffe;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9em;
}


.Footer {
  color: #000000;
  text-align: center;
  font-size: small;
  left: 0%; bottom: 100%;
  position: relative;
  padding: 10px;
  margin-top: 150px;
}

.Footer .Disclaimer {
  color: #000000;
  font-style: italic;
}

.Footer p {
  margin: 3px;
}

body {
  background-color: #F0FFFF;
  background-color: transparent;
  background-image: url("../assets/bg.jpg");
}
.Fields {
  float: left;
  margin-left: 20px;
}
.PullQuote {
  float: right; 
  max-width: 300px;
  border-top: thin black solid;
  border-bottom: thin black solid;
  font-size: 20px;
  line-height: 130%;
  font-style: italic;
  padding-top: 5px;	
  padding-bottom: 5px;
  padding: 10px;	
  margin-left: 20px;
  position: relative;
  right: 10%;
}

.PullQuote img {
  width:40px;
  height:30px;
  vertical-align: bottom;
}
</style>
