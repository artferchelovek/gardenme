import recessGroups from "stylelint-config-recess-order/groups";

const groupsWithEmptyLine = recessGroups.map((group) => ({
  ...group,
  emptyLineBefore: "always",
}));

export default {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-order"],
  rules: {
    "order/properties-order": groupsWithEmptyLine,
    "selector-class-pattern": null,
    "custom-property-pattern": null,
    "no-descending-specificity": null,
    "no-empty-source": null,
    "font-family-no-missing-generic-family-keyword": null,
    "declaration-empty-line-before": null,
  },
};
