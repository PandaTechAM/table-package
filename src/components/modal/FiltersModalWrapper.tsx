import React, { useState, cloneElement, ReactElement, ReactNode } from "react";
import { Autocomplete, TextField, Dialog, DialogContent } from "@mui/material";
import { ItemFields } from "../../Models/table.models";

interface IModal {
  children: ReactElement;
  isDisabled: boolean;
  columnsSizes: string;
  advancedSettings: boolean;
  filterTypeing: ItemFields;
  setCoulmnName: (name: string) => void;
}

const FiltersModalWrapper = ({
  isDisabled,
  children,
  columnsSizes,
  advancedSettings,
  filterTypeing,
  setCoulmnName,
}: IModal) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setCoulmnName("");
  };
  const childrenWithProps = cloneElement(children, {
    handleClose,
  });
  return (
    <div
      className="ForModal"
      style={{ width: advancedSettings ? columnsSizes : "100%" }}
    >
      <Autocomplete
        multiple
        disablePortal
        id="Favorite-tags"
        options={[]}
        readOnly
        disabled={isDisabled}
        limitTags={advancedSettings ? 1 : 2}
        value={filterTypeing.CheckedItems}
        autoFocus={false}
        fullWidth
        onOpen={handleOpen}
        renderInput={(params) => (
          <TextField
            key={params.id}
            {...params}
            label={filterTypeing.PropertyName}
            disabled
          />
        )}
      />
      <Dialog
        open={open}
        PaperProps={{ sx: { width: "100%" } }}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        maxWidth="md"
      >
        <DialogContent sx={{ height: 200 }} dividers>
          {childrenWithProps}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FiltersModalWrapper;
