"use client";

import { ReactNode } from "react";
import { Plus, Trash2 } from "lucide-react";
import { useCMS } from "@/contexts/CMSContext";

interface EditableArrayProps<T> {
  path: string;
  defaultItems: T[];
  renderItem: (item: T, index: number, itemPath: string) => ReactNode;
  createNewItem: () => T;
  minItems?: number;
  maxItems?: number;
  addButtonText?: string;
  className?: string;
  itemClassName?: string;
}

export function EditableArray<T extends { id: string }>({
  path,
  defaultItems,
  renderItem,
  createNewItem,
  minItems = 0,
  maxItems = 50,
  addButtonText = "Add Item",
  className,
  itemClassName,
}: EditableArrayProps<T>) {
  const { isEditMode, getContentValue, updateContent } = useCMS();

  const items = getContentValue<T[]>(path, defaultItems);

  const addItem = () => {
    if (items.length >= maxItems) return;
    const newItem = createNewItem();
    updateContent(path, [...items, newItem]);
  };

  const removeItem = (index: number) => {
    if (items.length <= minItems) return;
    const newItems = items.filter((_, i) => i !== index);
    updateContent(path, newItems);
  };

  const moveItem = (fromIndex: number, direction: "up" | "down") => {
    const toIndex = direction === "up" ? fromIndex - 1 : fromIndex + 1;
    if (toIndex < 0 || toIndex >= items.length) return;

    const newItems = [...items];
    const [moved] = newItems.splice(fromIndex, 1);
    newItems.splice(toIndex, 0, moved);
    updateContent(path, newItems);
  };

  return (
    <div className={className}>
      {items.map((item, index) => (
        <div
          key={item.id}
          className={itemClassName}
          style={{ position: "relative" }}
        >
          {/* Edit controls overlay */}
          {isEditMode && (
            <div
              style={{
                position: "absolute",
                top: "8px",
                right: "8px",
                display: "flex",
                gap: "4px",
                zIndex: 20,
              }}
            >
              {/* Move up button */}
              {index > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    moveItem(index, "up");
                  }}
                  style={{
                    width: "28px",
                    height: "28px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0, 0, 0, 0.8)",
                    border: "1px solid #D09947",
                    borderRadius: "4px",
                    cursor: "pointer",
                    color: "#D09947",
                    fontSize: "14px",
                  }}
                  title="Move up"
                >
                  ↑
                </button>
              )}

              {/* Move down button */}
              {index < items.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    moveItem(index, "down");
                  }}
                  style={{
                    width: "28px",
                    height: "28px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0, 0, 0, 0.8)",
                    border: "1px solid #D09947",
                    borderRadius: "4px",
                    cursor: "pointer",
                    color: "#D09947",
                    fontSize: "14px",
                  }}
                  title="Move down"
                >
                  ↓
                </button>
              )}

              {/* Delete button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (items.length <= minItems) {
                    alert(`Minimum ${minItems} item(s) required`);
                    return;
                  }
                  if (confirm("Remove this item?")) {
                    removeItem(index);
                  }
                }}
                disabled={items.length <= minItems}
                style={{
                  width: "28px",
                  height: "28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: items.length <= minItems ? "#333" : "#ef4444",
                  border: "none",
                  borderRadius: "4px",
                  cursor: items.length <= minItems ? "not-allowed" : "pointer",
                  opacity: items.length <= minItems ? 0.5 : 1,
                }}
                title={items.length <= minItems ? `Minimum ${minItems} items` : "Remove"}
              >
                <Trash2 size={14} color="#fff" />
              </button>
            </div>
          )}

          {/* Render the item */}
          {renderItem(item, index, `${path}.${index}`)}
        </div>
      ))}

      {/* Add item button */}
      {isEditMode && items.length < maxItems && (
        <button
          onClick={addItem}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            width: "100%",
            padding: "16px 24px",
            marginTop: "16px",
            background: "rgba(208, 153, 71, 0.1)",
            border: "2px dashed #D09947",
            borderRadius: "12px",
            color: "#D09947",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 500,
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(208, 153, 71, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(208, 153, 71, 0.1)";
          }}
        >
          <Plus size={18} />
          {addButtonText}
        </button>
      )}
    </div>
  );
}
