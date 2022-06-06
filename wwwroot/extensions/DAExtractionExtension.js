import {ensureEverythingReady} from './DA4R.js'

class DAExtractionExtension extends Autodesk.Viewing.Extension {
  constructor(viewer, options) {
      super(viewer, options);
  }

  load() {
      return true;
  }

  unload() {
      return true;
  }

  onToolbarCreated() {
    this._daExtractionButton = this.createToolbarButton('da-extract-button', 'https://img.icons8.com/fluency-systems-regular/32/undefined/bursts.png', 'Trigger DA proccess to extract compound layers');
    this._daExtractionButton.onClick = async () => {
        // this._daExtractionButton.setState(this._barChartPanel.isVisible() ? Autodesk.Viewing.UI.Button.State.ACTIVE : Autodesk.Viewing.UI.Button.State.INACTIVE);
        try{
            await ensureEverythingReady();
        }
        catch(error){
            console.log(error);
        }
    };
  }

  createToolbarButton(buttonId, buttonIconUrl, buttonTooltip) {
      let group = this.viewer.toolbar.getControl('da-toolbar-group');
      if (!group) {
          group = new Autodesk.Viewing.UI.ControlGroup('da-toolbar-group');
          this.viewer.toolbar.addControl(group);
      }
      const button = new Autodesk.Viewing.UI.Button(buttonId);
      button.setToolTip(buttonTooltip);
      group.addControl(button);
      const icon = button.container.querySelector('.adsk-button-icon');
      if (icon) {
          icon.style.backgroundImage = `url(${buttonIconUrl})`; 
          icon.style.backgroundSize = `24px`; 
          icon.style.backgroundRepeat = `no-repeat`; 
          icon.style.backgroundPosition = `center`; 
      }
      return button;
  }

  removeToolbarButton(button) {
      const group = this.viewer.toolbar.getControl('dashboard-toolbar-group');
      group.removeControl(button);
  }
}

Autodesk.Viewing.theExtensionManager.registerExtension('DAExtractionExtension', DAExtractionExtension);