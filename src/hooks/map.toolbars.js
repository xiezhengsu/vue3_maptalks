import * as maptalks from 'maptalks'
import EventBus from '@/utils/eventBus'
let distanceTool = null // 测距工具
let areaTool = null // 测面工具

function useMapToolBars(viewer) {
  // 激活/关闭 测距工具
  const activeMapRangingTool = (type) => {
    console.log(type, '-----type', window.viewer)
    if (type) {
      distanceTool = new maptalks.DistanceTool({
        symbol: {
          lineColor: '#34495e',
          lineWidth: 2,
        },
        vertexSymbol: {
          markerType: 'ellipse',
          markerFill: '#1bbc9b',
          markerLineColor: '#000',
          markerLineWidth: 3,
          markerWidth: 10,
          markerHeight: 10,
        },

        labelOptions: {
          textSymbol: {
            textFaceName: 'monospace',
            textFill: '#fff',
            textLineSpacing: 1,
            textHorizontalAlignment: 'right',
            textDx: 15,
            markerLineColor: '#b4b3b3',
            markerFill: '#000',
          },
          boxStyle: {
            padding: [6, 2],
            symbol: {
              markerType: 'square',
              markerFill: '#000',
              markerFillOpacity: 0.9,
              markerLineColor: '#b4b3b3',
            },
          },
        },
        clearButtonSymbol: [
          {
            markerType: 'square',
            markerFill: '#000',
            markerLineColor: '#b4b3b3',
            markerLineWidth: 2,
            markerWidth: 15,
            markerHeight: 15,
            markerDx: 20,
          },
          {
            markerType: 'x',
            markerWidth: 10,
            markerHeight: 10,
            markerLineColor: '#fff',
            markerDx: 20,
          },
        ],
        language: '',
      }).addTo(window.viewer)
    } else {
      distanceTool.remove()
      distanceTool = null
    }
  }
  // 激活/关闭  测面工具
  const activeMapAreaTool = (type) => {
    if (type) {
      areaTool = new maptalks.AreaTool({
        symbol: {
          lineColor: '#1bbc9b',
          lineWidth: 2,
          polygonFill: '#fff',
          polygonOpacity: 0.3,
        },
        vertexSymbol: {
          markerType: 'ellipse',
          markerFill: '#34495e',
          markerLineColor: '#1bbc9b',
          markerLineWidth: 3,
          markerWidth: 10,
          markerHeight: 10,
        },
        labelOptions: {
          textSymbol: {
            textFaceName: 'monospace',
            textFill: '#fff',
            textLineSpacing: 1,
            textHorizontalAlignment: 'right',
            textDx: 15,
          },
          boxStyle: {
            padding: [6, 2],
            symbol: {
              markerType: 'square',
              markerFill: '#000',
              markerFillOpacity: 0.9,
              markerLineColor: '#b4b3b3',
            },
          },
        },
        clearButtonSymbol: [
          {
            markerType: 'square',
            markerFill: '#000',
            markerLineColor: '#b4b3b3',
            markerLineWidth: 2,
            markerWidth: 15,
            markerHeight: 15,
            markerDx: 22,
          },
          {
            markerType: 'x',
            markerWidth: 10,
            markerHeight: 10,
            markerLineColor: '#fff',
            markerDx: 22,
          },
        ],
        language: '',
      }).addTo(window.viewer)
    } else {
      areaTool.remove()
      areaTool = null
    }
  }
  // 绘制多边形
  const activeDrawPolygonTool = () => {
    var drawTool = new maptalks.DrawTool({
      mode: 'Point',
    })
      .addTo(window.viewer)
      .disable()

    drawTool.on('drawend', function (param) {
      layer.addGeometry(param.geometry)
    })

    const items = [
      {
        item: 'Polygon',
        click: function () {
          drawTool.setMode(value).enable()
        },
      },
    ]
  }

  return {
    activeMapRangingTool,
    activeMapAreaTool,
    activeDrawPolygonTool
  }
}

export default useMapToolBars