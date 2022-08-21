import { Component } from "@angular/core";
import { BaseComp } from "../base.comp";
import { CAR_STATE_FILTER } from "src/app/constants/car-filter/car-state-filter.constants";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { CAR_PRICE_FILTER } from "src/app/constants/car-filter/car-price-filter.constants";
import { CAR_VEHICLE_TYPE_FILTER } from "src/app/constants/car-filter/car-vehicle-type-filter.constants";

@Component({
  selector: "car-filter-comp",
  templateUrl: "./car-filter.comp.html",
  styleUrls: ["./car-filter.comp.scss"],
})
export class CarFilterComp extends BaseComp {
  // Variable to show popup
  public isShowStateFilter: boolean = false;
  public isShowPriceFilter: boolean = false;
  public isShowMinPriceSelect: boolean = false;
  public isShowMaxPriceSelect: boolean = false;
  public isShowVehicleTypeFilter: boolean = false;

  // Car state filter
  public carStateOptions = CAR_STATE_FILTER;
  public stateSelected = CAR_STATE_FILTER["newCarAD"];
  public carStateKeys = Object.keys(this.carStateOptions);

  // Price range filter
  public carPriceOptions = CAR_PRICE_FILTER;
  public minPriceSelected = CAR_PRICE_FILTER["price10"];
  public maxPriceSelected = CAR_PRICE_FILTER["price100"];
  public carPriceKeys = Object.keys(this.carPriceOptions);

  public priceRangeLabel: string = "";

  // Vehicle type filter
  public vehicleTypeOptions = CAR_VEHICLE_TYPE_FILTER;
  public vehicleTypesSelected: string = "+0 selected";
  public vehicleTypeKeys = Object.keys(this.vehicleTypeOptions);

  public carFilterForm = this.fb.group({
    carState: "newCarAD",
    minPrice: "price10",
    maxPrice: "price100",
    vehicleTypes: this.fb.array([]),
  });

  constructor(private fb: FormBuilder) {
    super();
    this.init();
  }

  /**
   * Init values
   */
  init() {
    let doPriceRangeLabel = this.minPriceSelected.label + " - " + this.maxPriceSelected.label;
    this.priceRangeLabel = doPriceRangeLabel.replace(/[S]/g, "");

    this.initVehicleTypeFilter();
  }

  /**
   * Init array vehicle type filter
   */
  initVehicleTypeFilter() {
    const vehicleTypeFilter = this.carFilterForm.controls["vehicleTypes"] as FormArray;
    for (let key of this.vehicleTypeKeys) {
      const vehicleTypeForm = this.fb.group({
        vehicleType: this.vehicleTypeOptions[key],
        isSelected: false,
      });
      vehicleTypeFilter.push(vehicleTypeForm);
    }
  }

  /**
   * Get vehicleTypeList
   *
   * @return vehicleTypeList
   */
  get vehicleTypeList(): FormArray {
    return this.carFilterForm.controls["vehicleTypes"] as FormArray;
  }

  /**
   * Get vehicleTypeForm at index in vehicleTypes
   *
   * @param index refer vehicleTypeForm index in vehicleTypes
   * @returns vehicleTypeForm
   */
  getVehicleTypeForm(index: number): FormGroup {
    return this.vehicleTypeList.at(index) as FormGroup;
  }

  /**
   * Get vehicleTypeForm label at index in vehicleTypes
   *
   * @param index refer vehicleTypeForm index in vehicleTypes
   * @returns vehicleTypeForm label
   */
  getVehicleTypeFormLabel(index: number): string {
    return String(this.vehicleTypeList.at(index).get("vehicleType")?.value.label);
  }

  /**
   * Hide all filter popup
   *
   * @param except: except popup
   */
  hideAllPopup(except?: string) {
    switch (except) {
      case "stateFilter":
        this.isShowPriceFilter = false;
        this.isShowMinPriceSelect = false;
        this.isShowMaxPriceSelect = false;
        this.isShowVehicleTypeFilter = false;
        break;
      case "priceFilter":
        this.isShowStateFilter = false;
        this.isShowMinPriceSelect = false;
        this.isShowMaxPriceSelect = false;
        this.isShowVehicleTypeFilter = false;
        break;
      case "minPriceFilter":
        this.isShowStateFilter = false;
        this.isShowMaxPriceSelect = false;
        this.isShowVehicleTypeFilter = false;
        break;
      case "maxPriceFilter":
        this.isShowStateFilter = false;
        this.isShowMinPriceSelect = false;
        this.isShowVehicleTypeFilter = false;
        break;
      case "vehicleTypeFilter":
        this.isShowStateFilter = false;
        this.isShowPriceFilter = false;
        this.isShowMinPriceSelect = false;
        this.isShowMaxPriceSelect = false;
        break;
      default:
        this.isShowStateFilter = false;
        this.isShowPriceFilter = false;
        this.isShowMinPriceSelect = false;
        this.isShowMaxPriceSelect = false;
        this.isShowVehicleTypeFilter = false;
        break;
    }
  }

  /**
   * Show state filter popup
   */
  onShowStateFilter() {
    this.hideAllPopup("stateFilter");
    this.isShowStateFilter = !this.isShowStateFilter;
    let key = String(this.carFilterForm.get("carState")?.value);
    this.stateSelected = this.carStateOptions[key];
  }

  /**
   * Show state filter popup
   */
  onShowPriceFilter() {
    this.hideAllPopup("priceFilter");
    this.isShowPriceFilter = !this.isShowPriceFilter;
  }

  /**
   * Show min price select popup
   */
  onShowMinPriceSelect() {
    this.hideAllPopup("minPriceFilter");
    this.isShowMinPriceSelect = !this.isShowMinPriceSelect;
  }

  /**
   * Show max price select popup
   */
  onShowMaxPriceSelect() {
    this.hideAllPopup("maxPriceFilter");
    this.isShowMaxPriceSelect = !this.isShowMaxPriceSelect;
  }

  /**
   * On change of min price
   */
  onChangeMinPrice() {
    const minPriceKey = String(this.carFilterForm.get("minPrice")?.value);
    this.minPriceSelected = this.carPriceOptions[minPriceKey];
    this.carFilterForm.controls["minPrice"].setValue(minPriceKey);
  }

  /**
   * On change of max price
   */
  onChangeMaxPrice() {
    const maxPriceKey = String(this.carFilterForm.get("maxPrice")?.value);
    this.maxPriceSelected = this.carPriceOptions[maxPriceKey];
    this.carFilterForm.controls["maxPrice"].setValue(maxPriceKey);
  }

  /**
   * Clear price range to default
   */
  onClearPriceRange() {
    this.minPriceSelected = this.carPriceOptions["price10"];
    this.carFilterForm.controls["minPrice"].setValue("price10");
    this.maxPriceSelected = this.carPriceOptions["price100"];
    this.carFilterForm.controls["maxPrice"].setValue("price100");
  }

  /**
   * Save price range
   */
  onSavePriceRange() {
    const minPriceKey = String(this.carFilterForm.get("minPrice")?.value);
    this.minPriceSelected = this.carPriceOptions[minPriceKey];
    this.carFilterForm.controls["minPrice"].setValue(minPriceKey);

    const maxPriceKey = String(this.carFilterForm.get("maxPrice")?.value);
    this.maxPriceSelected = this.carPriceOptions[maxPriceKey];
    this.carFilterForm.controls["maxPrice"].setValue(maxPriceKey);

    // If max price < min price then reset to range 10 - 100
    if (this.maxPriceSelected.price < this.minPriceSelected.price) {
      this.minPriceSelected = this.carPriceOptions["price10"];
      this.carFilterForm.controls["minPrice"].setValue("price10");

      this.maxPriceSelected = this.carPriceOptions["price100"];
      this.carFilterForm.controls["maxPrice"].setValue("price100");
    }

    let doPriceRangeLabel = this.minPriceSelected.label + " - " + this.maxPriceSelected.label;
    this.priceRangeLabel = doPriceRangeLabel.replace(/[S]/g, "");
    this.hideAllPopup();
  }

  /**
   * On show vehicle type filter
   */
  onShowVehicleTypeFilter() {
    this.hideAllPopup("vehicleTypeFilter");
    this.isShowVehicleTypeFilter = !this.isShowVehicleTypeFilter;
  }

  /**
   * On Clear vehicle type filter
   */
  onClearVehicleTypesSelected() {
    const doVehicleTypeList = this.vehicleTypeList.value;
    const doVehicleTypeListLen = doVehicleTypeList.length;
    for (let i = 0; i < doVehicleTypeListLen; i++) {
      this.getVehicleTypeForm(i).controls["isSelected"].setValue(false);
    }
  }

  /**
   * On save vehicle type filter
   */
  onSaveVehicleTypesSelected() {
    let doVehicleTypesSelected = 0;
    const doVehicleTypeList = this.vehicleTypeList.value;
    doVehicleTypeList.forEach((vehicleType: any) => {
      if (vehicleType.isSelected) {
        doVehicleTypesSelected++;
      }
    });
    this.vehicleTypesSelected = "+" + doVehicleTypesSelected + " selected";
  }

  /**
   * On filter cars
   */
  carFilter() {}
}
