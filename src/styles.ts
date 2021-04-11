import styled from "styled-components";

interface AddItemButtonProps {
  dark?: boolean;
}

interface DragPreviewContaierProps {
  isHidden?: boolean;
  isPreview?: boolean;
}

export const DragPreviewContainer = styled.div<DragPreviewContaierProps>`
  opacity: ${(props) => (props.isHidden ? 0 : 1)};
  transform: ${(props) => (props.isPreview ? "rotate(5deg)" : undefined)};
`;

export const CustomDragLayerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  pointer-events: none;
`;

export const AddItemButton = styled.button<AddItemButtonProps>`
  color: ${(props) => (props.dark ? "#000" : "#fff")};
  max-width: 300px;
  width: 100%;
  padding: 10px 12px;
  text-align: left;
  background-color: #ffffff3d;
  border-radius: 3px;
  border: none;
  transition: background 85ms ease-in;
  cursor: pointer;
  &:hover {
    background-color: #ffffff52;
  }
`;

export const NewItemFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 300px;
`;

export const NewItemButton = styled.button`
  padding: 6px 12px;
  text-align: center;
  color: #fff;
  background-color: #5aac44;
  border-radius: 3px;
  box-shadow: none;
  border: none;
`;

export const NewItemInput = styled.input`
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  box-shadow: #091e4240 0px 1px 0px 0px;
  border-radius: 3px;
  border: none;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #3179ba;
`;

export const ColumnContainer = styled(DragPreviewContainer)`
  flex-grow: 0;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  padding: 8px 8px;
  border-radius: 3px;
  background-color: #ebecf0;
`;

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`;

export const CardContainer = styled(DragPreviewContainer)`
  max-width: 300px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: #091e4240 0px 1px 0px 0px;
  cursor: pointer;
`;
