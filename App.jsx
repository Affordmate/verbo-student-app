<>
  {item.mode !== 990 && item.mode !== 991 && ( // Render only if mode is not e-hailing or ambulance
    <>
      <Label label={t("form.departure")} />
      <DropdownList
        data={locations} // Assuming you have the list of locations for departure
        search={false}
        setSelected={item.destination}
        bg={true}
        onSelect={(item) => {
          var clonedPivotColumns = transportation.slice();
          clonedPivotColumns[index].destination = item.key;
          setTransportation(clonedPivotColumns);
        }}
        style={{
          backgroundColor: "#fff",
          borderWidth: 1,
          borderColor: "#000",
          borderRadius: 10,
        }}
      />
    </>
  )}

  <Break style={{ paddingTop: 20 }} />

  {item.mode !== 990 && item.mode !== 991 && (
    <>
      <Label label={t("form.arrival")} />
      <DropdownList
        data={locations} // Assuming you have the list of locations for arrival
        search={false}
        setSelected={item.arrival}
        bg={true}
        onSelect={(item) => {
          var clonedPivotColumns = transportation.slice();
          clonedPivotColumns[index].arrival = item.key;
          setTransportation(clonedPivotColumns);
        }}
        style={{
          backgroundColor: "#fff",
          borderWidth: 1,
          borderColor: "#000",
          borderRadius: 10,
        }}
      />
    </>
  )}

  <Break style={{ paddingTop: 20 }} />
</>
